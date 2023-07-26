const { getCountries } = require("../controllers/getCountries");
const { getIdCountries } = require("../controllers/getIdCountries"); 

const router = require("express").Router();



router.get("/", getCountries);
router.get("/:id", getIdCountries);



module.exports = router;