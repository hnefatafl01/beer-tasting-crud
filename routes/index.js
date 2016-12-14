var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'BREWRecord'})

});
// get beers tasted list page
router.get('/beerTasted', function(req, res, next) {
  knex('beer_tasted').select()
  .then(function(data){
    res.render('beerTasted', {beerData: data})
  })
});
//show new beer page
router.get('/new', function(req, res, next) {
  res.render('addbeer', {title: 'Newly Tasted Beers'})
});

//input new beer
router.post('/', function(req, res) {
  req.body.tasted = new Date();
   knex('beer_tasted').insert(
    req.body
  ).returning('id')
  .then(function(id) {
    res.redirect('/' + id[0]);
  })
});
//show beer with id
router.get('/:id', function(req,res,next) {
  knex('beer_tasted').select('tasted','beer_name','abv', 'brewery_name')
  .where('id', req.params.id)
  .first()
  .then(function(beer) {
    res.render('single', {
      id: req.params.id,
      addbeer_name: beer.beer_name,
      addbeer_brewery: beer.brewery_name,
      addbeer_abv: beer.abv,
      addbeer_date: beer.tasted
    })
  })
});
// show edit page
router.get('/:id/edit', function(req,res,next) {
  knex('beer_tasted').select('tasted','beer_name','abv', 'brewery_name')
  .where('id', req.params.id)
  .then(function(beer) {
    res.render('edit', {
      addbeer_name: beer.beer_name,
      addbeer_brewery: beer.brewery_name,
      addbeer_abv: beer.abv,
    })
  })
});

router.put('/:id',function (req,res,next) {
  knex('beer_tasted').select('tasted','beer_name','abv', 'brewery_name')
  .where('id', req.params.id)
  .update({
    addbeer_name: beer.beer_name,
    addbeer_brewery: beer.brewery_name,
    addbeer_abv: beer.abv,
    addbeer_date: beer.tasted
  })
  .then(function(beer) {
    res.redirect(`/${id}`);
  })
});

router.delete('/:id',function (req,res,next) {
  knex('beer_tasted').select('tasted','beer_name','abv', 'brewery_name')
  .where('id', req.params.id)
  .del()
  .then(function() {
    res.redirect(`/beerTasted`);
  })
});

module.exports = router;
