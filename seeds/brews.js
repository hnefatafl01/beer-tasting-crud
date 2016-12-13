exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE beer_tasted; ALTER SEQUENCE beer_tasted_id_seq restart with 1;')
    .then(function () {
      return Promise.all([
        knex('beer_tasted').insert({
            beer_name: 'Salmon Fly Honey Rye',
            brewery_name: 'Madison River Brewing Co.',
            abv: 5.6,
            tasted: '2009-04-05'
        }),
        knex('beer_tasted').insert({
            beer_name: 'Hopper Pale Ale',
            brewery_name: 'Madison River Brewing Co.',
            abv: 4.8,
            tasted: '2009-04-15'
        }),
        knex('beer_tasted').insert({
            beer_name: 'Cold Smoke Scotch Ale',
            brewery_name: 'Kettlehouse Brewing Co',
            abv:5.6,
            tasted: '2009-04-25'
        }),
        knex('beer_tasted').insert({
            beer_name: 'Bozone Amber Ale',
            brewery_name: 'Bozeman Brewing Co',
            abv:4,
            tasted: '2009-04-05'
        }),
        knex('beer_tasted').insert({
            beer_name: 'Fat Tire',
            brewery_name: 'New Belgium',
            abv:100,
            tasted: '2009-05-22'
        }),
        knex('beer_tasted').insert({
            beer_name: 'Trout Slayer Wheat Ale',
            brewery_name: 'Big Sky Brewing Co.',
            abv: 5.0,
            tasted: '2009-04-05'
        }),
        knex('beer_tasted').insert({
            beer_name: 'Copper John Scotch Ale',
            brewery_name: 'Madison River Brewing Co.',
            abv: 1,
            tasted: '2009-04-05'
        }),
        knex('beer_tasted').insert({
            beer_name: 'Moose Drool Brown Ale',
            brewery_name: 'Big Sky Brewing Co.',
            abv: 5.1,
            tasted: '2009-04-05'
        }),
        knex('beer_tasted').insert({
            beer_name: 'Upslope Oatmeal Stout',
            brewery_name: 'Upslope Brewing',
            abv: 2,
            tasted: '2016-01-05'
        }),
        knex('beer_tasted').insert({
            beer_name: 'Upslope Pale Ale',
            brewery_name: 'Upslope Brewing',
            abv: 3,
            tasted: '2016-01-05'
        })
      ]);
  });
};
