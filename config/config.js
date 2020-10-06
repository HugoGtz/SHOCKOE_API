module.exports =  {
  development: {
    username: 'root',
    password: '123456',
    database: 'shockoe_api_development',
    host: 'localhost',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: '123456',
    database: 'shockoe_api_test',
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: 'mysql'
  }
}