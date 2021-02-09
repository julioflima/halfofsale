const config = require('./database')

module.exports = class DatabaseConfig {
  static get() {
    return config
  }
}
