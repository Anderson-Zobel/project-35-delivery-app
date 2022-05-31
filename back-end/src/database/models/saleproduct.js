'use strict';
const {
  Model
} = require('sequelize');

const { Sale } = require('./sale');
const { Product } = require('./product');

module.exports = (sequelize, DataTypes) => {
  class SaleProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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

  Sale.belongsToMany(Product, {
    as: 'products',
    through: SaleProduct,
    foreignKey: 'saleId',
    otherKey: 'productId',
  });

  Product.belongsToMany(Sale, {
    as: 'sales',
    through: SaleProduct,
    foreignKey: 'productId',
    otherKey: 'saleId',
  })
  return SaleProduct;
};