module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    deliveryNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Sale',
    tableName: 'sales',
    underscored: true,
    timestamps: false,
  });
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: 'sellerId',
      as: 'seller'
    });
    Sale.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'client'
    });
  }

  return Sale;
};