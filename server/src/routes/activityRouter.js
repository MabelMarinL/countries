const { postActivities } = require("../controllers/postActivities");
const { getActivities } = require("../controllers/getActivities");

const router = require("express").Router();


router.post("/activity", postActivities);
router.get("/activity", getActivities);

module.exports = router;
