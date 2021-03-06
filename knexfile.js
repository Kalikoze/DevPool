// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/devpool',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true,
    seeds: {
     directory: './db/seeds/dev'
   },
  },

  test: {
    client: 'pg',
    connection:
      process.env.DATABASE_URL || 'postgres://localhost/devpool_test',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true,
    seeds: {
      directory: './db/seeds/test'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }

};
