const mysql = require('mysql2');
const inquirer = require("inquirer");
const db = require('./db/connection');
const table = require("console.table");




QuestionPrompt();


//Initial prompt, app will continously cycle back to this prompt after user has finished input.
function QuestionPrompt() {
    inquirer.prompt({
            message: "Select an Option",
            type: "list",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Quit"
            ]

        })

        .then(function ({
            option
        }) {
            switch (option) {
                case "View all departments":
                    viewDepartment();
                    break;

                case "View all roles":
                    viewRole();
                    break;

                case "View all employees":
                    viewEmployee();
                    break;

                case "Add a department":
                    addDepartment();
                    break;

                case "Add a role":
                    addRole();
                    break;

                case "Add an employee":
                    addEmployee();
                    break;

                case "Update an employee role":
                    updateEmployee();
                    break;

                case "Quit":
                    connection.end();
                    break;
            }
        });
}

function viewDepartment() {
    const sqlQuery = "SELECT * from department"
    // Expected result
    // (1, 'Sales'),
    //     (2, 'Engineering'),
    //     (3, 'Finance'),
    //     (4, 'Legal');

    var result = db.query(
        sqlQuery,
        function(err, result, fields) {
            if (err) {
                console.log("Bad Error: ", err)
            }
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
            console.table(result)
        })
}

function viewRole() {

}

function viewEmployee() {

}

function addDepartment(departmentName) {
    const sqlQuery = "INSERT INTO department (department_name) VALUES ?"
    const sqlParams = `('${departmentName}')`
    // Example: sqlParams = "('Finance')"

    var result = db.query(
        sqlQuery,
        [sqlParams],
        function(err, results) {
            if (err) {
                console.log("Bad Error: ", err)
            }
            console.log(results); // results contains rows returned by server
        })
}


function addRole(title, salary, department_id) {

}

function addEmployee() {

}

function updateEmployee() {

}