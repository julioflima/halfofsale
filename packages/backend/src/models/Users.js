const { Model, DataTypes } = require('sequelize')

module.exports = class Users extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      { sequelize: connection }
    )
  }

  static associate(models) {
    this.belongsToMany(models.Firmwares, {
      foreignKey: 'user_id',
      through: 'users_firmwares',
      as: 'firmwares',
    })
  }
}
