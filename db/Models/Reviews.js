const  mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    body: {
        type: String,
        required: [true, "Please enter a text body"]
    },
    stars: {
        type: Number,
    }
})

const Reviews = mongoose.model('Reviews', reviewSchema)

module.exports = Reviews