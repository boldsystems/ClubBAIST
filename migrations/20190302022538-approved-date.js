'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.removeColumn('StandingTeeTimes', 'ApprovedDate');
    await queryInterface.addColumn('StandingTeeTimes', 'ApprovedDate', {
      type: Sequelize.DATE,
      allowNull: true
    }, {});
  },

  down: async(queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.removeColumn('StandingTeeTimes', 'ApprovedDate');
    await queryInterface.addColumn('StandingTeeTimes', 'ApprovedDate', {
      type: Sequelize.TIME,
      allowNull: true
    }, {});
  }
};
