const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
        sequelize.define('Country', {
            id:{
                type:DataTypes.STRING(3),
                defaultValue: DataTypes.UUIDV4,
                allowNull:false,
                auntoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            flags:{
                type: DataTypes.STRING,
                allowNull:false
            },
            continents: {
                type: DataTypes.STRING,
                allowNull:false,
            },
            capital:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            subregion:{
                type: DataTypes.STRING,
                allowNull:true
            },
            area: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            population: {
                type: DataTypes.STRING,
                allowNull: false
            }

    }, {
        timestamps: false
    });
};