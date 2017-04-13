// Prutta igång mongoDB med hjälp av att stå i root, dvs. ~
// och kör mongod <-- Boom

// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Routes
app.use('/api', require('./routes/api'));




// Start server
app.listen(5000);
console.log('API is running on port 5000');