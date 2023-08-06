'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Pessoas', [
      {
       nome: 'Michelle',
       ativo: true,
       email: 'michelle@gmail.com',
       role: 'enfermeira',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      nome: 'Jose',
      ativo: true,
      email: 'jose@gmail.com',
      role: 'estudante',
      createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      nome: 'Alisson',
      ativo: true,
      email: 'alisson@gmail.com',
      role: 'estudante',
      createdAt: new Date(),
     updatedAt: new Date()
    }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
