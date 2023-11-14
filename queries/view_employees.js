const fs = require('fs');
const { db } = require('../db/db');

const sqlQuery = `SELECT
e.first_name,
e.last_name,
r.title AS role_title,
d.name AS department
    from employees e
        JOIN roles r    
            ON e.role_id = r.id 
        JOIN departments d
            ON r.department_id = d.id
    WHERE r.id = 1;`

function viewEmployees (callback) {
    // Get the table the user is looking for in the database
    db.query(sqlQuery, (err, result) => {
        if (err) throw err;

        console.log(`\nEmployees Table`);
        console.table(result);
        console.log('\n');

        callback();
    });
}

module.exports = viewEmployees;