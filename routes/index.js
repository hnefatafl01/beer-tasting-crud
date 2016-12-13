var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BREWRecord'})

});

router.get('/beerTasted', function(req, res, next) {
  knex('beer_tasted').select()
  .then(function(data){
    res.render('beerTasted', {beerData: data})
  })
})

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Newly Tasted Beers'})
})

router.post('/', function(req, res) {
  req.body.tasted = new Date();
   knex('beer_tasted').insert(
    req.body
  ).returning('id')
  .then(function(id) {
    console.log(id[0]);
    res.redirect('/' + id[0]);
  })
})

router.get('/:id')

// router.get('/:id', function(req, res, next) {
//   db.get(req.params.id).then(function (data))//knex(tablename).select().where(id = req.params.id)
//   res.render('index', { title: 'BREWRecord' });
//
// });

module.exports = router;

// get data from database with knex
// knex('table').then((rows) => {res.render('index.hbs', rows)})


// knex.('student')
//   .insert({
//     name: req.body.name
//   }), ('id').then( (ids)=> {
//
//   })

// knex.select('*').from('beer_tasted');
// .then((rows) => {
//   res.render('index.hbs', rows)
