'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('firmwares', 'name_file', {
      type: Sequelize.STRING,
      allowNull: false,
    })

    await queryInterface.addColumn('firmwares', 'size_file', {
      type: Sequelize.INTEGER,
      allowNull: false,
    })

    await queryInterface.addColumn('firmwares', 'url_file', {
      type: Sequelize.STRING,
      allowNull: false,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('firmwares', 'file')
    await queryInterface.removeColumn('firmwares', 'size_file')
    await queryInterface.removeColumn('firmwares', 'url_file')
  },
}
