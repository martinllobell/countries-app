const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('tourinf', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dificultad:{
      type: DataTypes.ENUM({
        values: ['Difícil', 'Fácil', 'Intermedio']
      })
    },
    duracion:{
        type: DataTypes.STRING
    },
    temporada:{
        type: DataTypes.ENUM({
          values: ['Verano', 'Invierno', 'Otoño', 'Primavera']
        })
    }
  });
};
