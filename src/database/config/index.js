const dotenv = require('dotenv');

dotenv.config();

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
    host: 'localhost',
    port: '5432',
    omitNull: true,
    ssl: true,
    use_env_variable: 'DATABASE_URL',
  },
};
