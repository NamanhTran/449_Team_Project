const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

const { databaseConnection } = require('./model/database');
const authRoutes = require('./routes/authRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const searchRoutes = require('./routes/searchRoutes');

// Cors Options
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST'],
    credential: true
};

app.use(cors(corsOptions));

app.use(express.static(__dirname));
app.use(express.static("public"));

app.use(authRoutes);

app.use(reviewRoutes);

app.use(searchRoutes);

databaseConnection(() => {
    http.createServer(app).listen(3000);
});