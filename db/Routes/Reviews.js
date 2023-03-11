const router = require("express").Router();
const { getReviews } = require("../Controllers/Reviews");

router.get("/", getReviews);

module.exports = router;
