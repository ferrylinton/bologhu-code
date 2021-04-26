'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Authority extends Model {

    static associate(models) {

      models.Authority.belongsToMany(models.Role, {
        through: 'sec_role_authority',
        foreignKey: 'authority_id',
        as: 'roles',
        timestamps: false
      });

    }

  };

  Authority.init({

    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },

    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'Authority',
    tableName: 'sec_authority'
  });

  return Authority;

};