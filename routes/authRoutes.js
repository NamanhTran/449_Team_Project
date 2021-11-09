const express = require('express');

const authController = require('../controller/authController');

const router = express.Router();

router.post('/login', authController.postLogIn);

router.post('/signup', authController.postSignUp);

module.exports = router;