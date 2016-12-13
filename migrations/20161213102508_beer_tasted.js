
exports.up = function(knex, Promise) {
  knex.schema.createTable('beer_tasted', (table) => {
    table.increment();
    table.varchar('beer_name').notNullable();
    table.varchar('brewery_name').nullable();
    table.numeric('abv').nullable();;
    table.date('tasted').notNullable();;
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('beer_tasted');
};
