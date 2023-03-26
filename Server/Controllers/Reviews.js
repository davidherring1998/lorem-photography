const asyncHandler = require("express-async-handler");
const Reviews = require("../Models/Reviews");

// GET
// api/reviews
const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Reviews.find();
  res.status(200).json(reviews);
});

// POST
// api/reviews
const addReview = asyncHandler(async (req, res) => {
  // deconstruct
  const { name, body, stars } = req.body;

  // validate inputs
  if (!name || !body || !stars) {
    res.status(400).json({ msg: `Please enter all required fields` });
  }

  // create user
  const review = await Reviews.create({
    name,
    body,
    stars,
  });

  // check if review was created
  if (review) {
    res.status(201).json({
      msg: `User was created.`,
      _id: review._id,
      name: review.name,
      body: review.body,
      stars: review.starts,
    });
  }
});

module.exports = {
  getReviews,
  addReview,
};
