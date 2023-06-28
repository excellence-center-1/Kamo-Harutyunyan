'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('question', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      context: {
        type: Sequelize.STRING
      },
    },
      {
        createdAt: false,
        updatedAt: false
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('question');
  }
};