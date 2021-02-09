const { Sequelize } = require('sequelize')
const aws = require('aws-sdk')

const Users = require('../models/Users')
const Firmwares = require('../models/Firmwares')
const FirmwaresService = require('../services/FirmwaresService')

const { errorToMessage } = require('../utils/captalize')

const s3 = new aws.S3()

module.exports = class FirmwaresController {
  static async create(req, res) {
    try {
      const { user_id } = req.params
      const { version_major, version_minor, version_patch, name_project, name_board } = req.body
      const { size, key, location: url = '' } = req.file

      const user = await Users.findByPk(user_id)
      if (!user) throw { code: 400, message: 'User not found!' }

      const lastData = await Firmwares.findAll({
        limit: 1,
        where: {
          name_project,
        },
        raw: true,
        order: [['created_at', 'DESC']],
      })

      const lastVersionisHigherVersion = FirmwaresService.isHigherVersion(
        { lastData, version_major, version_minor, version_patch },
        '>='
      )

      if (lastVersionisHigherVersion)
        throw {
          code: 400,
          message: 'Already exists higher version in this project! Please, set a higher version.',
        }

      const firmware = await Firmwares.create({
        version_major,
        version_minor,
        version_patch,
        name_project,
        name_board,
        name_file: key,
        size_file: size,
        url_file: url,
      })

      return res.status(200).json({
        data: firmware,
        message: `The project ${name_project}, with firmware '${name_board}', v${version_major}.${version_minor}.${version_patch}, was created!`,
      })
    } catch (error) {
      await s3
        .deleteObject({
          Bucket: process.env.BUCKET_NAME,
          Key: req.file.key,
        })
        .promise()

      if (error.code)
        return res.status(error.code).json({
          message: error.message,
        })

      return res.status(500).json({
        error: error,
        message: errorToMessage(error),
      })
    }
  }

  static async index(req, res) {
    try {
      const { user_id } = req.params
      const { filter = '', filter_by = 'name_project' } = req.query

      const user = await Users.findByPk(user_id)
      if (!user) return res.status(401).json({ message: 'Unauthorized!' })

      const firmwares = await Firmwares.findAll({
        where: {
          [filter_by]: {
            [Sequelize.Op.iLike]: `%${filter}%`,
          },
        },
        raw: true,
        order: [['created_at', 'DESC']],
      })

      const data = FirmwaresService.addNameFile(firmwares)

      return res.status(200).json({
        data: data,
      })
    } catch (error) {
      console.log(error)
      return res.status(401).json({
        error: error,
        message: errorToMessage(error),
      })
    }
  }

  static async update(req, res) {
    try {
      const { user_id, firmware_id } = req.params
      const { version_major, version_minor, version_patch, name_project, name_board } = req.body
      const { size, key, location: url = '' } = req.file

      const user = await Users.findByPk(user_id)
      if (!user) throw { code: 400, message: 'User not found!' }

      const firmware = await Firmwares.findByPk(firmware_id)
      if (!firmware) throw { code: 400, message: 'Firmware not found!' }

      const lastData = await Firmwares.findAll({
        limit: 1,
        where: {
          id: firmware_id,
        },
        raw: true,
        order: [['created_at', 'DESC']],
      })

      const lastVersionisHigherVersion = FirmwaresService.isHigherVersion(
        { lastData, version_major, version_minor, version_patch },
        '>'
      )

      if (lastVersionisHigherVersion)
        throw {
          code: 400,
          message:
            'Already exists higher version in this project! Please, set the same or a higher version.',
        }

      await s3
        .deleteObject({
          Bucket: process.env.BUCKET_NAME,
          Key: firmware.name_file,
        })
        .promise()

      await Firmwares.update(
        {
          version_major,
          version_minor,
          version_patch,
          name_project,
          name_board,
          name_file: key,
          size_file: size,
          url_file: url,
        },
        {
          where: { id: firmware_id },
        }
      )

      return res.status(200).json({
        message: `The project ${name_project}, with firmware '${name_board}', v${version_major}.${version_minor}.${version_patch}, was updated!`,
      })
    } catch (error) {
      await s3
        .deleteObject({
          Bucket: process.env.BUCKET_NAME,
          Key: req.file.key,
        })
        .promise()

      if (error.code)
        return res.status(error.code).json({
          message: error.message,
        })

      return res.status(500).json({
        error: error,
        message: errorToMessage(error),
      })
    }
  }

  static async delete(req, res) {
    try {
      const { user_id, firmware_id } = req.params

      const user = await Users.findByPk(user_id)
      if (!user) return res.status(401).json({ message: 'Unauthorized!' })

      const firmware = await Firmwares.findByPk(firmware_id)
      if (!firmware) return res.status(401).json({ message: 'Firmware not found!' })

      await s3
        .deleteObject({
          Bucket: process.env.BUCKET_NAME,
          Key: firmware.name_file,
        })
        .promise()

      await Firmwares.destroy({
        where: {
          id: firmware_id,
        },
      })

      return res.status(200).json({
        data: [],
        message: `The project ${firmware.name_project}, with firmware '${firmware.name_board}', v${firmware.version_major}.${firmware.version_minor}.${firmware.version_patch}, was deleted!`,
      })
    } catch (error) {
      return res.status(500).json({
        error: error,
        message: errorToMessage(error),
      })
    }
  }
}
