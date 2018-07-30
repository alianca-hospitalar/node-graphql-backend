module.exports = (sequelize, DataTypes) =>
  sequelize.define('Hospital', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    timestamps: true,
    tableName: 'Hospitais'
  })
