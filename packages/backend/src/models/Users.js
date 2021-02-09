const { Model, DataTypes } = require('sequelize')
// import { uuid } from 'uuidv4'

module.exports = class Users extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        pwassword: DataTypes.STRING,
      },
      { sequelize: connection }
    )

    // this.addHook('beforeSave', async (user) => {
    //   return (user.id = uuid())
    // })

    // return this
  }
}
