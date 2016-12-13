
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beer_tasted', (table) => {
    table.increments();
    table.varchar('beer_name').notNullable();
    table.varchar('brewery_name').nullable();
    table.float('abv').nullable();;
    table.date('tasted').notNullable();;
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('beer_tasted');
};
