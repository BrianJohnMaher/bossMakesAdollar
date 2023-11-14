const inquirer = require('inquirer');
const { addDepartment, addRole, addEmployee, updateEmployee } = require('./prompts');
const {  viewEmployees, viewRoles } = require('./queries');
const db = require('./db/db');

function init() {
    mainMenu();
}

// Allow user's to choose any of the options and then pass it into the handler
function mainMenu() {
    inquirer
        .prompt({
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
        }).then((answer) => {
            switch (answer.options) {
                case 'View all Departments':
                    viewDepartments();
                    break;
                case 'View all Roles':
                    viewRoles(() => mainMenu());
                    break;
                case 'View all Employees':
                    viewEmployees(() => mainMenu());
                    break;
                case 'Add a Department':
                    addDepartment(() => mainMenu());
                    break;
                case 'Add a Role':
                    addRole(() => mainMenu());
                    break;
                case 'Add an Employee':
                    addEmployee(() => mainMenu());
                    break;
                case 'Update an Employees Role':
                    updateEmployee(() => mainMenu());
                    break;
                case 'Exit':
                    console.log('Exiting the app...');
                    process.exit(0);
            }
        });
}

function viewDepartments () {
    // Get the table the user is looking for in the database
    db.query('SELECT * FROM departments;', (err, result) => {
        if (err) throw err;

        console.log(`\nDepartments Table`);
        console.table(result);
        console.log('\n');

        mainMenu();
    });
}


init();