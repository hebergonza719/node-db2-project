
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments(); // this creates an id that increments automatically
    tbl.text('VIN', 128).unique().notNullable();
    tbl.text('make', 128).notNullable();
    tbl.text('model', 128).notNullable();
    tbl.text('mileage', 128).notNullable();
    tbl.text('transmission', 128)
    tbl.text('title status', 128)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};
