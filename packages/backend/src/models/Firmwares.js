const { Model, DataTypes } = require('sequelize')

module.exports = class Firmwares extends Model {
  static init(connection) {
    super.init(
      {
        version_major: DataTypes.INTEGER,
        version_minor: DataTypes.INTEGER,
        version_patch: DataTypes.INTEGER,
        name_project: DataTypes.STRING,
        name_board: DataTypes.STRING,
      },
      { sequelize: connection }
    )
  }

  static associate(models) {
    this.belongsToMany(models.Users, {
      foreignKey: 'firmware_id',
      through: 'users_firmwares',
      as: 'group_of_work',
    })
  }
}
