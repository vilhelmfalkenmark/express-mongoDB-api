const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
// const fs         = require('fs');

mongoose.connect('mongodb://localhost/rest_test');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;        // set our port

// Handle CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// ROUTES FOR OUR API
// =============================================================================
const router = require('./routes/'); // get an instance of the express Router

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

console.log("Björn apiet mår bra!");
app.listen(port);
