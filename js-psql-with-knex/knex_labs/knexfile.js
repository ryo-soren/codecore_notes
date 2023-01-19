// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'post',
    connection: {
      database: 'knex_labs',
    },
    migration
  },



    migrations: {
      tableName: 'knex_migrations'
    },
    
    seeds:{
      directory: 'seeds'
    }
  }

