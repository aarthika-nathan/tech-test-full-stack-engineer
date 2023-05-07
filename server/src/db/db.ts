import mysql = require('mysql');

let mySqlConfigs : mysql.PoolConfig = {
  host: "database",
  port: 3306,
  user: "root",
  password: "hipages",
  database: "hipages",
};

let connection = mysql.createPool(mySqlConfigs);

module.exports = connection;
