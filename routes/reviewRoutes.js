const express = require('express');

const reviewController = require('../controller/reviewController');

const router = express.Router();

router.get('/reviews', reviewController.getReviews);

router.get('/createreview', reviewController.getCreateReview);

router.post('/createreview', reviewController.postCreateReview);

module.exports = router;