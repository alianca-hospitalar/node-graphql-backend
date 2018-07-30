module.exports = {
  up: (queryInterface, Sequelize) => {
    const columns = {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE(6)
      },
      updatedAt: {
        type: Sequelize.DATE(6)
      }
    }

    return queryInterface.createTable('Hospitais', columns)
  },
  down: (queryInterface) => queryInterface.dropTable('Hospitais')
}
