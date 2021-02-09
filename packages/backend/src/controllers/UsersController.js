const Users = require('../models/Users')

const { errorToMessage } = require('../utils/captalize')

module.exports = class UsersController {
  static async create(req, res) {
    try {
      const { name, email, password } = req.body

      const user = await Users.create(
        { name, email, password, admin: false },
        { attributes: ['name', 'id'] }
      )

      const newUser = { name: user.dataValues.name, id: user.dataValues.id }

      return res.status(200).json({
        data: newUser,
        message: `User '${name}', with email '${email}', was created!`,
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

      const user = await Users.findOne({
        where: { id: user_id, admin: true },
      })

      if (!user) return res.status(401).json({ message: 'Unauthorized!' })

      const users = await Users.findAll({
        where: { admin: true },
        attributes: ['id', 'name', 'email', 'createdAt'],
      })

      return res.status(200).json({
        data: users,
      })
    } catch (error) {
      return res.status(401).json({
        error: error,
        message: errorToMessage(error),
      })
    }
  }

  static async update(req, res) {
    try {
      const { user_id } = req.params
      const { admin_id } = req.body

      const user = await Users.findByPk(user_id)
      if (!user) return res.status(400).json({ message: 'Unauthorized!' })

      const userAdmin = await Users.findByPk(admin_id)
      if (!userAdmin) return res.status(400).json({ message: 'User  not found!' })

      await Users.update(
        { admin: true },
        {
          where: { id: admin_id },
        }
      )

      return res.status(200).json({
        message: `The user is now an admin too!`,
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
