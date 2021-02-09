const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Users = require('../models/Users')

module.exports = class Cloud {
  static init() {
    const connection = new Sequelize(dbConfig)

    Users.init(connection)

    return connection
  }
}
