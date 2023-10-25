"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("persons", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      date_of_birth: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("persons");
  },
};
