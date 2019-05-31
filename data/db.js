const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

const getDishes = () => {
  return db('dishes');
};

const addDish = dish => {
  return db('dishes')
    .insert(dish);
};

const getDish = async (id) => {
  const dish = await db('dishes').where({ id: Number(id) }).first();
  const recipes = await db('recipes').where({ dish_id: dish.id });
  return { dish: dish, recipes: recipes };
};

const getRecipes = () => {
  return db('recipes', 'dishes')
    .select('recipes.*', 'dishes.name as dish_name')
    .innerJoin('dishes', 'recipes.dish_id', 'dishes.id');
};

const addRecipe = recipe => {
  return db('recipes')
    .insert(recipe);
};

const getShoppingList = (dish, recipe) => {

};

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
  getShoppingList,
};