'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      sale_id: {
        type: Sequelize.INTEGER,
        refereces: {
          model: "sales",
          key: "id"
        },
        allowNull: false,
        primaryKey: true,

      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "id",
        },
        allowNull: false,
        primaryKey: true,

      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales_products')
  }
};
