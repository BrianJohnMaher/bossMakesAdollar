const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost', 
    user: 'root',
    database: 'employee_tracker'
  },
);

db.connect((err) => {
  if (err) {
    console.error('\nError connecting to the database: ' + err.message);
  } else {
    console.log('\nConnected to the employee_tracker database.\n\n');
    callback();
  }
});

module.exports = db