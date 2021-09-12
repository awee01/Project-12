const mysql = require('mysql2');
const inquirer = require("inquirer");
const db = require('./db/connection');
const table = require("console.table");

// Message when first connecting to server.js
connection.connect(function (err) {
    if (err) throw err;
    console.log(`Welcome to the Employee Database`)

    //Runs the first initial prompt
    QuestionPrompt();
});

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


}

function viewRole() {

}

function viewEmployee() {

}

function addDepartment() {

}


function addRole() {

}

function addEmployee() {

}

function updateEmployee() {

}