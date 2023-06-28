'use strict';

/ @type {import('sequelize-cli').Migration} /
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('subscription', [{
      name: 'short word'
    },
    {
      name: '1 character'
    }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('subscription', null, {});
  }
};
