const { Model, DataTypes } = require('sequelize')

module.exports = class Users extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        admin: DataTypes.BOOLEAN,
      },
      { sequelize: connection }
    )
  }
}
