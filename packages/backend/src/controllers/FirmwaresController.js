const Users = require('../models/Users')
const Firmwares = require('../models/Firmwares')

const { errorToMessage } = require('../utils/captalize')

module.exports = class FirmwaresController {
  static async create(req, res) {
    try {
      const { user_id } = req.params
      const { version_major, version_minor, version_patch, name_project, name_board } = req.body

      const user = await Users.findByPk(user_id)

      if (!user) return res.status(400).json({ message: 'User not found!' })

      const firmware = Firmwares.create({
        version_major,
        version_minor,
        version_patch,
        name_project,
        name_board,
      })

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
