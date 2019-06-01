
exports.seed = async function(knex) {
  await knex('recipes').insert([
    { id: 1, name: 'vegetarian', instructions: 'Just cook the stuff and shove it in a tortilla', dish_id: 1 },
    { id: 2, name: 'shredded pork', instructions: 'Just cook the stuff and shove it in a tortilla', dish_id: 1 },
    { id: 3, name: 'vegan', instructions: 'Just slap everything onto a dough disk and cook it', dish_id: 2 },
    { id: 4, name: 'meat-lovers', instructions: 'Just slap everything onto a dough disk and cook it', dish_id: 2 },
    { id: 5, name: 'vegetarian', instructions: 'Just cook the stuff with a buncha spices and sauce', dish_id: 3 },
    { id: 6, name: 'tikka masala', instructions: 'Just cook the stuff with a buncha spices and sauce', dish_id: 3 },
  ])
};
