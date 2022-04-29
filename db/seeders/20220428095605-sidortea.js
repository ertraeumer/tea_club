'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * 
    */
    await queryInterface.bulkInsert('Teas', [{
      tea_name: 'Majic Yuunan',
      from: '33.922858435071724, 39.28918685266446',
      description: 'Supa dupa yanyan',
      image: 'google.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // {
    //   tea_name: 'Earl Gray',
    //   from: [33.922858435071724, 39.28918685266446],
    //   description: 'mmm bergamot',
    //   image: 'no image fck you',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   tea_name: 'Green Melissa',
    //   from: [33.922858435071724, 39.28918685266446],
    //   description: 'norm chai',
    //   image: '___',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   tea_name: 'Greenfield',
    //   from: [33.922858435071724, 39.28918685266446],
    //   description: 'fine',
    //   image: 'thank you',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   tea_name: 'Princess Nouri',
    //   from: [33.922858435071724, 39.28918685266446],
    //   description: 'deshevo serdito',
    //   image: 'kak v detstve',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   tea_name: 'chifir',
    //   from: [33.922858435071724, 39.28918685266446],
    //   description: 'a ne petuh li ti chasom',
    //   image: 'fsin.ru',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   tea_name: 'Kenyan Sunrise',
    //   from: [33.922858435071724, 39.28918685266446],
    //   description: 'chto vspomnil',
    //   image: 'hz',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   tea_name: 'beseda',
    //   from: [33.922858435071724, 39.28918685266446],
    //   description: 'chai beseda',
    //   image: 'kartinka',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    {
      tea_name: 'blablabla',
      from: '33.922858435071724, 39.28918685266446',
      description: 'no idea',
      image: 'oops',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
    await queryInterface.bulkDelete('Teas', null, {});
  },
};
