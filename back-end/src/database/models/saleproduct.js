'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SaleProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Sale.belongsToMany(models.Product, {
        as: 'products',
        through: SaleProduct,
        foreignKey: 'saleId',
        otherKey: 'productId',
      });
    
      models.Product.belongsToMany(models.Sale, {
        as: 'sales',
        through: SaleProduct,
        foreignKey: 'productId',
        otherKey: 'saleId',
      })
    }
  }
  SaleProduct.init({
    saleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'SaleProduct',
    tableName: 'salesProducts',
    underscored: true,
    timestamps: false,
  });

  return SaleProduct;
};