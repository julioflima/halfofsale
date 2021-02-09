const Sequelize = require('sequelize')
const DatabaseConfig = require('../config/DatabaseConfig')

const Users = require('../models/Users')
const Firmwares = require('../models/Firmwares')

module.exports = class Cloud {
  static init() {
    const dbConfig = DatabaseConfig.get()
    const connection = new Sequelize(dbConfig)

    Users.init(connection)
    Firmwares.init(connection)

    return connection
  }
}
