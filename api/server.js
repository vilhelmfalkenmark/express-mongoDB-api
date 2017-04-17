const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const fs         = require('fs');

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

//////////////////////////////////////////
// IMAGES ENDPOINT
//////////////////////////////////////////
const imageFolder = "./images/";
const images = [];
fs.readdir(imageFolder, (err, files) => {
  files.forEach(file => {
   if(file.indexOf(".DS_Store") === -1) {
    images.push(file);
   }
  });
})

const fullUrlToImages = (req, image) => `${req.protocol}://${req.get('host')}${req.originalUrl}${image}`;

router.route('/images').get((req, res) => {
        res.json(images.map((image) => fullUrlToImages(req,image)));
    })
// The actual bear images
router.use('/images', express.static('images'))

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
console.log("Björn apiet mår bra!");
app.listen(port);
