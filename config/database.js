const {
  DB_USER = "postgres",
  DB_PASSWORD = "Ressy931",
  DB_NAME = "bcr",
  DB_HOST = "127.0.0.1",
  DB_PORT = "5432",
} = process.env;

// process.env.development = local 
// process.env.test = local (tp utk test => jadi DB nya khusus test)
// process.env.production = server => setelah di deploy

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_development`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_development`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT
  },
  production: {
    username: 'postgres',
    password: 'Ressy931',
    database: 'railway',
    host: 'containers-us-west-121.railway.app',
    port: '5930',
    dialect: 'postgres'
  }
}
