const express = require('express');

const searchController = require('../controller/searchController');

const router = express.Router();

router.get('/search', searchController.getSearch);

router.get('/trending', searchController.getTrending);

router.get('/top-rated', searchController.getTopRated);

module.exports = router;