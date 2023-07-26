const activityR = require("./activityRouter");
const countryR = require("./countryRouter");

const router = require("express").Router();

router.use("/",activityR);
router.use("/",countryR);

module.exports = router;