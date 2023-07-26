const { Country, Activity } = require("../db");



const getIdCountries = async(req, res) => {
    try {
        const  {id } =  req.params;
        console.log(id);
        const countryId = await Country.findOne({
            where:{
                id: id.toUpperCase()
            },
            includes: Activity
        }) 
        if(countryId) return res.status(200).json(countryId);
        else throw new Error(`ID: no existe ${id}`)
        
    } catch (error) {
      return  res.status(400).json({error: error.message})
    }
}

module.exports = { getIdCountries };