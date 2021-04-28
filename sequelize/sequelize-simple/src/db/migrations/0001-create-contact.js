'use strict';

const tableName = 't_contact';

module.exports = {

  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable(tableName, {

      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      name: {
        type: Sequelize.STRING
      },

      created_at: {
        type: Sequelize.DATE
      }

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  }
  
};