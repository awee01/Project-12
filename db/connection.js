const mysql = require('mysql2');


const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'redalert29882agh',
  database: 'business'
});


module.exports = db;