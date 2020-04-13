
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '2255', make: 'toyota', model: 'celica', mileage: '123,456'},
        {VIN: '2256', make: 'honda', model: 'accord', mileage: '123,456'},
        {VIN: '2257', make: 'pontiac', model: 'firebird', mileage: '123,456'}
      ]);
    });
};
