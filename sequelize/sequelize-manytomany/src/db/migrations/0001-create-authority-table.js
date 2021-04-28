'use strict';

const tableName = 'sec_authority';


module.exports = {

  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable(tableName, {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      }

    });

    await queryInterface.addConstraint(tableName, {
      type: 'unique',
      fields: ['name'],
      name: 'sec_authority_name_uq'
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(tableName);
  }

};