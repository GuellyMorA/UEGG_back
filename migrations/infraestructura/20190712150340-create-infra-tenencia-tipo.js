'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('infra_tenencia_tipo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenencia: {
        type: Sequelize.STRING
      },
      es_vigente: {
        type: Sequelize.BOOLEAN
      },
      fecha_registro: {
        type: Sequelize.DATE
      },
      fecha_modificacion: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('infra_tenencia_tipo');
  }
};