// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: `postgres:///${process.env.LOCAL_DATABASE_NAME}`
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
    }
  }
}
