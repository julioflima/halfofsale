const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Users = require('../models/Users')
const Firmwares = require('../models/Firmwares')

module.exports = class Cloud {
  static init() {
    const connection = new Sequelize(dbConfig)

    Users.init(connection)
    Firmwares.init(connection)

    Users.associate(connection.models)
    Firmwares.associate(connection.models)

    return connection
  }
}
