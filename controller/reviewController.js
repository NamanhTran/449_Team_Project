const Review = require('../model/reviewModel');
const path = require('path');

exports.getReviews = async (req, res, next) => {
    const { movieTitle } = req.body;

    try {
        const reviews = await Review.findMany().where('movieTitle').equals(movieTitle);
        return res.status(200).json(reviews);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: `Database error in retrieving reviews for ${movieTitle}`});
    }
};

exports.getCreateReview = async (req, res, next) => {
    const movieTitle = req.query.title;

    return res.render(path.join(__dirname, '../', 'public', 'pages', 'review.ejs'), {movieTitle: movieTitle});
};

exports.postCreateReview = async (req, res, next) => {
    const { username, movieTitle, review, rating } = req.body;
    
    const newReview = new Review({username: username, movieTitle: movieTitle, review: review, rating: rating});

    try {
        await newReview.save();
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Database error in saving new Review"});
    }

    return res.send(200);
};