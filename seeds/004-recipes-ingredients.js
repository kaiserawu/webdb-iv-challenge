
exports.seed = async function(knex) {
  await knex('recipes_ingredients').insert([
    { id: 1, recipe_id: 1, ingredient_id: 1, quantity: 4 },
    { id: 2, recipe_id: 1, ingredient_id: 2, quantity: 2 },
    { id: 3, recipe_id: 1, ingredient_id: 5, quantity: 1 },
    { id: 4, recipe_id: 2, ingredient_id: 8, quantity: 23 },
    { id: 5, recipe_id: 2, ingredient_id: 6, quantity: 15 },
    { id: 6, recipe_id: 2, ingredient_id: 9, quantity: 9 },
    { id: 7, recipe_id: 2, ingredient_id: 10, quantity: 7 },
    { id: 8, recipe_id: 3, ingredient_id: 3, quantity: 10 },
    { id: 9, recipe_id: 3, ingredient_id: 7, quantity: 2 },
    { id: 10, recipe_id: 4, ingredient_id: 4, quantity: 7 },
    { id: 11, recipe_id: 4, ingredient_id: 2, quantity: 8 },
    { id: 12, recipe_id: 4, ingredient_id: 1, quantity: 34 },
    { id: 13, recipe_id: 5, ingredient_id: 4, quantity: 1 },
    { id: 14, recipe_id: 5, ingredient_id: 9, quantity: 6 },
    { id: 15, recipe_id: 5, ingredient_id: 10, quantity: 18 },
    { id: 16, recipe_id: 5, ingredient_id: 2, quantity: 2 },
    { id: 17, recipe_id: 6, ingredient_id: 5, quantity: 5 },
    { id: 18, recipe_id: 6, ingredient_id: 6, quantity: 100 },
    { id: 19, recipe_id: 6, ingredient_id: 7, quantity: 1 },
    { id: 20, recipe_id: 6, ingredient_id: 3, quantity: 4 },
    { id: 21, recipe_id: 6, ingredient_id: 9, quantity: 9 },
    { id: 22, recipe_id: 6, ingredient_id: 1, quantity: 83 },
  ])
};
