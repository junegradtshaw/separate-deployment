var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

function Pirates() {
  return knex('pirates');
}
/* GET home page. */
router.get('/', function(req, res, next) {
  Pirates().then(function(pirates) {
    console.log('!!!!======Im in the route');
    res.json(pirates);
  })
});

module.exports = router;
