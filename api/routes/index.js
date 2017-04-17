const routes = require('express').Router();
const bears = require('./bears');
const images = require('./images');

routes.get('/', (req, res) => { // <-- Will live on endpoint /api
    res.json({ message: 'Welcome to our api. The current endpoints are: api/images & api/bears' });
});

routes.use('/bears', bears); // <-- Will live on endpoint /api/bears
routes.use('/images', images); // <-- Will live on endpoint /api/images

module.exports = routes;
