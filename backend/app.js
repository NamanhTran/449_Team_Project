const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
app.use(bodyParser.json());

const { databaseConnection } = require('./model/database');
const authRoutes = require('./routes/authRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const searchRoutes = require('./routes/searchRoutes');

// Home page
app.get('/', (req, res, next) => {
    console.log('homepage');
    return res.send("homepage");
});

app.use(authRoutes);

app.use(reviewRoutes);

app.use(searchRoutes);

databaseConnection(() => {
    http.createServer(app).listen(3000);
});