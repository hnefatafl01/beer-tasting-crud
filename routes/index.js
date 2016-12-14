var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'BREWRecord'})

});

router.get('/beerTasted', function(req, res, next) {
  knex('beer_tasted').select()
  .then(function(data){
    res.render('beerTasted', {beerData: data})
  })
});

router.get('/new', function(req, res, next) {
  res.render('new', {title: 'Newly Tasted Beers'})
});

router.post('/', function(req, res) {
  req.body.tasted = new Date();
   knex('beer_tasted').insert(
    req.body
  ).returning('id')
  .then(function(id) {
    // console.log(id[0]);
    res.redirect('/' + id[0]);
  })
});

router.get('/:id', function(req,res,next) {
  knex('beer_tasted').select('tasted','beer_name','abv', 'brewery_name')
  .where('id', req.params.id)
  .first()
  .then(function(beer) {
    res.render('newbeer', {
      newBeer_name: beer.beer_name,
      newBeer_brewery: beer.brewery_name,
      newBeer_abv: beer.abv,
      newBeer_date: beer.tasted
    })
  })
});

router.put('/:id/edit',function (req,res,next) {
  knex('beer_tasted').select('tasted','beer_name','abv', 'brewery_name')
  .where('id', req.params.id)
  .then(function(beer) {
    res.render('updatebeer', {
      newBeer_name: beer.beer_name,
      newBeer_brewery: beer.brewery_name,
      newBeer_abv: beer.abv,
      newBeer_date: beer.tasted
    })
  })
});

module.exports = router;
