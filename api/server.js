// BASE SETUP
// =============================================================================
// call the packages we need
const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/rest_test');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router(); // get an instance of the express Router

router.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our api!' });
});

// Models
var Bear = require('./models/bear');
//////////////////////////////////////////
// GET & POST FOR ALL BEARS
//////////////////////////////////////////-
router.route('/bears')
    // create a bear (accessed at POST http://localhost:5000/api/bears)
    .post((req, res) => {
        var bear = new Bear();      // create a new instance of the Bear model
        bear.name = req.body.name;  // set the bears name (comes from the request)
        bear.type = req.body.type;  // set the bears rase (comes from the request)
        bear.age = req.body.age;  // set the bears age (comes from the request)

        // save the bear and check for errors
        bear.save((err) => {
            if (err) {
             res.send(err);
            } else {
             res.json({ message: 'Bear created!' });
            }
        });

    })

    .get((req, res) => {
    Bear.find((err, bears) => {
        if (err) {
         res.send(err);
        } else {
         res.json(bears);
        }
    });
   });


//////////////////////////////////////////
// SINGLE BEAR ROUTE
//////////////////////////////////////////
router.route('/bears/:bear_id')
    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Bear.findById(req.params.bear_id, (err, bear) => {
            if (err) {
             res.send(err);
            } else {
             res.json(bear);
            }
        });
    })

    .put((req, res) => {
    // use our bear model to find the bear we want
    Bear.findById(req.params.bear_id, (err, bear) => {
        if (err) {
         res.send(err);
        }

        bear.name = req.body.name;  // update the bears info

        // save the bear
        bear.save((err) => {
            if (err) {
             res.send(err);
            } else {
             res.json({ message: 'Bear updated!' });
            }
        });
    });
})

// delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
.delete((req, res) => {
    Bear.remove({
        _id: req.params.bear_id
    }, (err, bear) => {
        if (err) {
         res.send(err);
        } else {
         res.json({ message: 'Successfully deleted' });
        }
    });
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// The bear images
app.use('/images', express.static('images'))

// START THE SERVER
// =============================================================================
console.log("Björn apiet mår bra!");
app.listen(port);
