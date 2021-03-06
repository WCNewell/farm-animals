require("dotenv").load()

module.exports = {
  development: {
    client: "pg",
    connection: `postgres:///${process.env.LOCAL_DATABASE_NAME}`
  },
  production: {
    client: "pg",
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
}