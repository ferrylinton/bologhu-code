'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Role extends Model {

    static associate(models) {
      
      models.Role.belongsToMany(models.Authority, {
        through: 'sec_role_authority',
        foreignKey: 'role_id',
        as: 'authorities',
        timestamps: false
      });

    }

  };

  Role.init({

    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },

    name: {
      type: DataTypes.STRING(50)
    }

  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'sec_role'
  });

  return Role;

};