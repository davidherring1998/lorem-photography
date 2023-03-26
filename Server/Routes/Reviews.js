const router = require("express").Router();
const { getReviews, addReview } = require("../Controllers/Reviews");

router.get("/", getReviews);
router.post("/", addReview);

module.exports = router;
