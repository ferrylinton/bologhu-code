"use strict";


const tableName = 'sec_role_authority';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable(tableName, {

      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      authority_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }

    });

    await queryInterface.addConstraint(tableName, {
      fields: ['role_id', 'authority_id'],
      type: 'primary key',
      name: 'sec_role_authority_pk'
    });

    await queryInterface.addConstraint(tableName, {
      type: 'foreign key',
      fields: ['role_id'],
      name: 'sec_role_authority_role_id_fk',
      references: {
        table: 'sec_role',
        field: 'id'
      }
    });

    await queryInterface.addConstraint(tableName, {
      type: 'foreign key',
      fields: ['authority_id'],
      name: 'sec_role_authority_authority_id_fk',
      references: {
        table: 'sec_authority',
        field: 'id'
      }
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(tableName);
  }
  
};