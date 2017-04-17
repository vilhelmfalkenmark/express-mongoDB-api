const express = require('express');
const router = express.Router(); // get an instance of the express Router

// Models
var Bear = require('../models/bear');
//////////////////////////////////////////
// GET & POST FOR ALL BEARS
//////////////////////////////////////////-
router.route('/')
    .post((req, res) => {
        var bear = new Bear();      // create a new instance of the Bear model
        bear.name = req.body.name; // set the bears name (comes from the request)
        bear.type = req.body.type;
        bear.age = req.body.age;
        bear.image_url = req.body.image_url;
        bear.description = req.body.description;
        bear.save((err) => {
            if (err) {
             res.send(err);
            } else {
             res.json({newBear: bear});
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
router.route('/:bear_id')
    .get((req, res) => {
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
        bear.type = req.body.type;  // update the bears info
        bear.age = req.body.age;  // update the bears info
        bear.description = req.body.description;  // update the bears info
        bear.image_url = req.body.image_url;  // update the bears info
        // save the bear
        bear.save((err) => {
            if (err) {
             res.send(err);
            } else {
             res.json({ updatedBear: bear });
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

module.exports = router;
