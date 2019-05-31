
exports.seed = async function(knex) {
  await knex('dishes').insert([
    { id: 1, name: 'tacos' },
    { id: 2, name: 'pizza' },
    { id: 3, name: 'curry' },
  ])
};
