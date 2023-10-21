"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "todolists",
      [
        {
          title: "Check Email",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Check Git",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Debug Code",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pair Program",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Push Code",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("todolists", null, {});
  },
};
