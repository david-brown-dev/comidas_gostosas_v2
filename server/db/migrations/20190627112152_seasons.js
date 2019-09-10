exports.up = function (knex, Promise) {
  return knex.schema.createTable('seasons', table => {
    table.increments('id').primary()
    table.string('label')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('seasons')
}
