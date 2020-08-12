
exports.up = function(knex) {
  return knex.schema.createTable("cars", function(cars) {
    cars.increments();

    cars.string("vin", 128).notNullable();
    cars.string("make", 128).notNullable();
    cars.string("model", 128).notNullable();
    cars.string("mileage", 128).notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
