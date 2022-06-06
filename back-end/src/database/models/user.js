
'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Sale, {
        foreignKey: 'userId',
        as: 'purchased'
      });
      User.hasMany(models.Sale, {
        foreignKey: 'sellerId',
        as: 'sales'
      });
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false,
    }

  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
  });

  return User;
};