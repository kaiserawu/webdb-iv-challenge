
exports.seed = async function(knex) {
  await knex('ingredients').insert([
    { id: 1, name: 'bucket of flour' },
    { id: 2, name: 'spoon of butter' },
    { id: 3, name: 'egg' },
    { id: 4, name: 'large zucchini' },
    { id: 5, name: 'pound of flesh' },
    { id: 6, name: 'paprika' },
    { id: 7, name: 'hopes and dreams' },
    { id: 8, name: 'smooth pebble' },
    { id: 9, name: 'random detritus' },
    { id: 10, name: 'himalayan salt' },
  ])
};
