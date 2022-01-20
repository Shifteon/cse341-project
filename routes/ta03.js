//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const Product = require('../model/ta03model');

router.get('/', (req, res, next) => {
  Product.fetchAll(products => {
    res.render('pages/ta03', {
      title: 'Team Activity 03',
      path: '/ta03', // For pug, EJS
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS
      products: products
    });
  });
});

router.post('/search', (req, res, next) => {
  Product.search(req.body.query, products => {
    res.render('pages/ta03', {
      title: 'Team Activity 03',
      path: '/ta03', // For pug, EJS
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS
      products: products
    });
  });
});

module.exports = router;
