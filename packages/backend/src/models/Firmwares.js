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
        name_file: DataTypes.STRING,
        size_file: DataTypes.INTEGER,
        url_file: DataTypes.STRING,
      },
      { sequelize: connection }
    )
  }
}
