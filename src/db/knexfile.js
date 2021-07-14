// Update with your config settings.

module.exports = {

  /* development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  }, */

  development: {
    client: 'postgresql',
    connection: {
      database: 'CRUDapp_db',
      user:     'username',
      password: 'DavyJones99'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/db/migrations',
      tableName: 'knex_migrations'
    },
    seeds : {
      directory : './src/db/seeds'
    }
  },

  /* production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  } */

};