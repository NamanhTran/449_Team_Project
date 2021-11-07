const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    movieTitle: {
        type: String,
        required: true
    },

    review: {
        type: String,
        required: true
    },

    rating: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Review', reviewSchema);