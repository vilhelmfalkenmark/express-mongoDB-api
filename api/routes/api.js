// Dependencies
const express = require('express');
const router = express.Router();

// Models
const Products = require('../models/product');

// Routes
Products.methods(['get', 'put', 'post', 'delete', 'patch']);
Products.register(router, '/products');
// <-- Bygg på den befintliga api/ endpointen till api/products

// Return router
module.exports = router;
