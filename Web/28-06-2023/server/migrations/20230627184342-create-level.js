'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('level', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      junior: {
        type: Sequelize.STRING
      },
      begginer: {
        type: Sequelize.STRING
      },
      middle: {
        type: Sequelize.STRING
      },
      senior: {
        type: Sequelize.STRING
      },
    },
      {
        createdAt: false,
        updatedAt: false
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('level');
  }
};