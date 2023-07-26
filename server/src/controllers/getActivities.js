const { Country, Activity } = require("../db");

const getActivities = async(req, res) => {
try {
    const allActivities = await Activity.findAll({
        include: Country,
    });
    return res.status(200).json(allActivities);
    
} catch (error) {
    return res.status(400).send("No se encontraron Actividades")
}
}

module.exports = {
    getActivities
}