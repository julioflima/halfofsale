'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('firmwares', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
      },
      version_major: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      version_minor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      version_patch: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name_project: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name_board: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('firmwares')
  },
}
