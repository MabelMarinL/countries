const axios = require("axios");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const URL = "http://localhost:5000/countries"
  


// los datos traidos de la URL se ejecuta en index.js
const countriesInfor = async() => {
    const allCountries = Country.findAll();
    if(!allCountries.length) {
        const infor = await axios.get(URL);
        const detailCountry = infor.data.map((country) => {
            return {
                id: country.cca3,
                name: country.name.common,
                flags: country.flags.png,
                continents: country.continents[0],
                capital: country.capital !== undefined ? country.capital[0]: "No hay datos",
                subregion:country.subregion !== undefined ? country.subregion: "No hay datos",
                area: country.area,
                population:country.population
            }
        });
        await Country.bulkCreate(detailCountry);
    };
};




const getCountries = async(req, res) => {   
    const { name } = req.query;

   try {
        if(!name) {
            const countryAll = await Country.findAll({include: Activity});
            return res. status(200).json(countryAll);
        } 
        else {
            const searchCountry = await Country.findAll({
                where: {
                    // *con el operador ilike -->se realiza la busqueda sin
                    // *tomar en cuenta mayusculas o minusculas
                    name: {[Op.iLike]:`%${name}%`}   
                }, 
                include : Activity
            })

            if(!searchCountry.length)
            return res.status(404).json({error: `No se encontro países con ${name}`})

        return res. status(200).json(searchCountry);
        }
    
   } catch (error) {
    return res.status(500).json({error: error.message});
   }
}


module.exports = {
    countriesInfor,
    getCountries
}