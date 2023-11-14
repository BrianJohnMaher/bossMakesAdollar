const fs = require('fs');
const { db } = require('../db/db');

const sqlQuery = `SELECT
r.title,
r.salary,
d.name AS department
    FROM roles r
        JOIN departments d   
            ON r.department_id = d.id; `;

function viewRoles (callback) {
    // Get the table the user is looking for in the database
    db.query(sqlQuery, (err, result) => {
        if (err) throw err;

        console.log(`\nRoles Table`);
        console.table(result);
        console.log('\n');

        callback();
    });
}

module.exports = viewRoles;