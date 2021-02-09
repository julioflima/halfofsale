const Users = require('../models/Users')

const { errorToMessage } = require('../utils/captalize')

module.exports = class UsersController {
  static async create(req, res) {
    try {
      const { name, email } = req.body

      const user = await Users.create({ name, email })

      return res.status(200).json({
        data: user,
        message: `User '${name}', with email '${email}' created!`,
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
      const { name } = req.query

      const count = await db('sensor')
        .where({
          name,
        })
        .count()
        .first()

      const todos = await db('sensor')
        .where({
          name,
        })
        .select(['timestamp', 'date', 'value'])

      res.header('X-Total-Count', count['count(*)'])

      return res.status(200).json(todos)
    } catch (error) {
      res.send(error)
    }
  }

  static async delete(req, res) {
    try {
      const { name } = req.query
      const { timestamp } = req.body

      const data = await db('sensor').where({ name, timestamp }).select('*').first()

      if (!data) return res.status(404).json({ error: 'Was not found that data.' })

      await db('sensor').where({ name, timestamp }).delete()

      return res
        .status(200)
        .json({ message: `Timestamp '${timestamp}', of sensor '${name}'  deleted!` })
    } catch (error) {
      throw error
    }
  }
}
