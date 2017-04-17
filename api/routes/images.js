const express = require('express');
const router = express.Router();
const fs = require('fs');

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

router.route('/').get((req, res) => {
  res.json(images.map((image) => fullUrlToImages(req,image)));
});

router.use('/', express.static('./images'));

module.exports = router;
