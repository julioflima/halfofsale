const Users = require('../models/Users')
const Firmwares = require('../models/Firmwares')
const FirmwaresService = require('../services/FirmwaresService')

const { getNameFile } = require('../utils/getNameFile')
const { errorToMessage } = require('../utils/captalize')

module.exports = class FirmwaresController {
  static async create(req, res) {
    try {
      const { user_id } = req.params
      const { version_major, version_minor, version_patch, name_project, name_board } = req.body
      const { size, key, location: url = '' } = req.file

      const user = await Users.findByPk(user_id)
      if (!user) return res.status(400).json({ message: 'User not found!' })

      const lastFirmware = Firmwares.findAll({
        limit: 1,
        where: {
          name_project,
        },
        order: [['created_at', 'DESC']],
      })

      FirmwaresService.isHigherVersion(lastFirmware)

      if (lastFirmware)
        return res.status(400).json({
          message: 'Already exists higher version in this project! Please, set a higher version.',
        })

      const oldFirmware = await Firmwares.findOne({
        where: { name_project, version_major, version_minor, version_patch },
      })

      if (oldFirmware)
        return res.status(400).json({
          message:
            'Already exists the same version in this project! Please, set a different version.',
        })

      const nameFile = getNameFile(
        name_project,
        version_major,
        version_minor,
        version_patch,
        name_project
      )

      const firmware = await Firmwares.create({
        version_major,
        version_minor,
        version_patch,
        name_project: nameFile,
        name_board: name_board,
        name_file: key,
        size_file: size,
        url_file: url,
      })

      return res.status(200).json({
        data: firmware,
        message: `The project ${name_project}, with firmware '${name_board}', v${version_major}.${version_minor}.${version_patch}, was create created!`,
      })
    } catch (error) {
      console.log(error)
      return res.status(401).json({
        error: error,
        message: errorToMessage(error),
      })
    }
  }

  static async index(req, res) {
    try {
      const { user_id } = req.params
      const { version_major, version_minor, version_patch, name_project, name_board } = req.body

      const user = await Users.findByPk(
        user_id,

        { include: { association: 'firmwares' } }
      )

      if (!user) return res.status(400).json({ message: 'User not found!' })

      const [firmware, created] = Firmwares.findOrCreate({
        where: { version_major, version_minor, version_patch, name_project, name_board },
        defaults: {
          name_project,
        },
      })

      if (!created)
        return res.status(409).json({ message: 'This version of this project already exists!' })

      user.addFirmwares(firmware)

      return res.status(200).json({
        data: firmware,
        message: `The project ${name_project}, with firmware '${name_board}', v${version_major}.${version_minor}.${version_patch}, was create created!`,
      })
    } catch (error) {
      return res.status(401).json({
        error: error,
        message: errorToMessage(error),
      })
    }
  }
}
