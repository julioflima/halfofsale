const Users = require('../models/Users')

const { errorToMessage } = require('../utils/captalize')

module.exports = class LoginController {
  static async index(req, res) {
    try {
      const { email, password } = req.body

      const user = await Users.findOne({
        where: { email, password },
        attributes: ['name', 'id', 'admin'],
      })

      const { admin, name } = user.dataValues

      if (!user) return res.status(401).json({ message: 'Unauthorized!' })

      if (!admin)
        return res
          .status(401)
          .json({ message: 'Unauthorized! Contact the admin and request your approval to access.' })

      return res.status(200).json({
        data: user,
        message: `${name}, was logged!`,
      })
    } catch (error) {
      console.log(error)
      return res.status(401).json({
        error: error,
        message: errorToMessage(error),
      })
    }
  }
}
