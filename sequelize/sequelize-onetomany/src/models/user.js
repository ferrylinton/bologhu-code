const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {

  class User extends Model {

    static associate(models) {
      models.User.belongsTo(models.Role, { as: 'role' });
    }

  };

  User.init({

    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },

    username: {
      type: DataTypes.STRING(50),
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'User',
    tableName: 'sec_user'
  });

  return User;

};