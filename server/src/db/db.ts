import mysql = require('mysql');

let mySqlConfigs : mysql.PoolConfig = {
  host: process.env.ENV_DB_HOST,
  port: process.env.ENV_DB_PORT,
  user: process.env.ENV_DB_USER,
  password: process.env.ENV_DB_PWD,
  database: process.env.ENV_DATABASE,
};

let connection = mysql.createPool(mySqlConfigs);

module.exports = connection;
