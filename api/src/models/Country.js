const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    poblation: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.STRING,
    },
    subregion:{
      type: DataTypes.STRING
    },
    flag: {
      type: DataTypes.STRING,
      itsUrl: true
    },
    continente: {
      type: DataTypes.STRING
    }
  });
};
