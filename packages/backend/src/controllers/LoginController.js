const Users = require('../models/Users')

const { errorToMessage } = require('../utils/captalize')

module.exports = class LoginController {
  static async index(req, res) {
    try {
      const { name, email } = req.body

      const user = await Users.create({ name, email })

      return res.status(200).json({
        data: user,
        message: `User '${name}', with email '${email}', was created!`,
      })
    } catch (error) {
      return res.status(401).json({
        error: error,
        message: errorToMessage(error),
      })
    }
  }

  static async create(req, res) {
    try {
      const { name, email } = req.body

      const user = await Users.create({ name, email })

      return res.status(200).json({
        data: user,
        message: `User '${name}', with email '${email}', was created!`,
      })
    } catch (error) {
      return res.status(401).json({
        error: error,
        message: errorToMessage(error),
      })
    }
  }
}
