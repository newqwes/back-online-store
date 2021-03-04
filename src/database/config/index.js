module.exports = {
  development: {
    dialect: 'postgres',
    username: 'postgres',
    password: 'root',
    database: 'store_db',
    host: 'localhost',
    port: '5432',
    omitNull: true,
  },
  production: {
    dialect: 'postgres',
    username: 'postgres',
    password: 'root',
    database: 'store_db',
    host: process.env.DATABASE_URL,
    port: '5432',
    omitNull: true,
  },
};
