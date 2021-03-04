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
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.PGHOST,
    port: process.env.PORT_DATABASE,
    omitNull: true,
  },
};
