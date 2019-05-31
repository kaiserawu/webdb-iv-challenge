
exports.up = async function(knex) {
  await knex.schema.createTable('dishes', tbl => {
    tbl.increments('id');
    tbl.string('name').unique().notNullable();
  })

  await knex.schema.createTable('recipes', tbl => {
    tbl.increments('id');
    tbl.string('name').notNullable();
    tbl.string('instructions').notNullable();
    tbl.integer('dish_id').references('id').inTable('dishes').onDelete('CASCADE').onUpdate('CASCADE').notNullable();
  })

  await knex.schema.createTable('ingredients', tbl => {
    tbl.increments('id');
    tbl.string('name').unique().notNullable();
  })

  await knex.schema.createTable('recipes_ingredients', tbl => {
    tbl.increments('id');
    tbl.integer('recipe_id').references('id').inTable('dishes').onDelete('CASCADE').onUpdate('CASCADE').notNullable();
    tbl.integer('ingredient_id').references('id').inTable('dishes').onDelete('CASCADE').onUpdate('CASCADE').notNullable();
    tbl.integer('quantity').notNullable();
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('dishes');
  await knex.schema.dropTableIfExists('recipes');
  await knex.schema.dropTableIfExists('ingredients');
  await knex.schema.dropTableIfExists('recipes_ingredients');
};
