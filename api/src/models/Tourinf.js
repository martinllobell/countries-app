const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('tourinf', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dificultad:{
      type: DataTypes.STRING
    },
    duracion:{
        type: DataTypes.STRING
    },
    temporada:{
        type: DataTypes.STRING
    }
  });
};
