'use strict';

const tableName = 'sec_role';


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
        type: Sequelize.STRING,
        allowNull: false
      }
      
    });

    await queryInterface.addConstraint(tableName, {
      type: 'unique',
      fields: ['name'],
      name: 'sec_role_name_uq'
    });

  },
  down: async (queryInterface) => {
    await queryInterface.dropTable(tableName);
  }
};