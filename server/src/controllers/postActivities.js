const { Activity, Country } = require("../db");



const postActivities = async(req, res) => {
    const { name, difficulty, duration, season, countryId } = req.body;
    
    try {
        
        if(!name || !difficulty || !duration || !season || !countryId)
        return res.status(400).send("faltan datos");
        

        // *buscar si ya existe la actividad
        const validate = await Activity.findOne({
            where:{
                name:name,
            },
        });
        
        //* buscar el id de Country 
        const selectCountries = await Country.findAll({
            where:{
                id: countryId,
            }
        });

       
        if(!validate) {

            const addActivity =  await Activity.create({ 
                name:name, 
                difficulty:difficulty, 
                duration:duration, 
                season:season 
            });

            // Asociar los países con addCountries
            const asociar = await addActivity.addCountries(selectCountries.map((country) => country.id))

            return res.status(200).json(addActivity);
        };
        
        const asociar = await validate.addCountries(selectCountries.map((country) => country.id));
        return res.status(200).send(validate);
        

    } catch (error) {
        return res.status(500).json({error: error.mesagge});
    }
}


module.exports = {
    postActivities
}