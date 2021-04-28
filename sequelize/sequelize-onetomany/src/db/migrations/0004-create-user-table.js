'use strict';

const tableName = 'sec_user';


module.exports = {

  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable(tableName, {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      username: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }

    });

    await queryInterface.addConstraint(tableName, {
      type: 'foreign key',
      fields: ['role_id'],
      name: 'sec_user_role_id_fk',
      references: {
        table: 'sec_role',
        field: 'id'
      }
    });

    await queryInterface.addConstraint(tableName, {
      type: 'unique',
      fields: ['username'],
      name: 'sec_user_username_uq'
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(tableName);
  }

};