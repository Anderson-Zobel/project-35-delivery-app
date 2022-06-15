module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: { model: 'Sale', key: 'id' }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: { model: 'Product', key: 'id' },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'SaleProduct',
    tableName: 'sales_products',
    underscored: true,
    timestamps: false,
  });
  SaleProduct.associate = (models) => {
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
  return SaleProduct;
};