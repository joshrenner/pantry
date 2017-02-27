var express = require('express');
var router = express.Router();

var ingredients = require('../data/ingredients.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pantry', { title: 'Pantry', ingredients: ingredients });
});

module.exports = router;
