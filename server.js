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

    db.query("SELECT * from department")

    QuestionPrompt();

}

function viewRole() {

   db.query("SELECT * from employeeRole")

    QuestionPrompt();

}

function viewEmployee() {


    db.query("SELECT * from employee")

    QuestionPrompt();

}

function addDepartment(department_name) {

    inquirer.prompt([

        {
        type: 'input',
        name: 'newdepartment',
        message: 'Enter the new Department',
        }

    ]).then((addnewdepartment) => {

        db.query("INSERT INTO department (department_name) VALUES (?)", 
        [addnewdepartment.deptName])
     
    })

    QuestionPrompt();
}


function addRole(title, salary, departmentid) {

    inquirer.prompt([

        {
        type: 'input',
        name: 'newjobtitle',
        message: 'Enter the new job',
        },

        {
        type: 'input',
        name: 'newsalary',
        message: 'Input a salary',
        },

        {
        type: 'input',
        name: 'newdepartmentid',
        message: 'Input a department ID',
        },

    ]).then((addnewRole) => {

        db.query("INSERT INTO employeeRole (title, salary, department_id) VALUES (?, ?, ?)", 
        [addnewRole.newjobtitle, addnewRole.newsalary, addnewRole.newdepartmentid ])
     
    })

QuestionPrompt();

}


function addEmployee() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'newfirstname',
            message: 'Enter your first name',
            
        },
        {
            type: 'input',
            name: 'newlastname',
            message: 'Enter your last name',
            
        },
        {
            type: 'input',
            name: 'newroleid',
            message: 'Enter your role id number',
           
        },
        {
            type: 'input',
            name: 'newmanagerid',
            message: 'Enter your manager id number',
           
        }
    ]).then((addnewEmployee) => {

        db.query("INSERT INTO employee (first_name, last_name, employeeRole_id, manager_id) VALUES (?, ?, ?, ?)", 
        [addnewEmployee.newfirstname, addnewEmployee.newlastname, addnewEmployee.newroleid, addnewEmployee.newmanagerid])
     
    })

QuestionPrompt();

}



function updateEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter the name of the employee that needs an update",
          name: "employeeupdate"
        },
  
        {
          type: "input",
          message: "What is the new role ID of the employee?",
          name: "roleupdate"
        }
      ]).then((updateEmployee) => {

        db.query("UPDATE employee SET employeeRole_id = ? WHERE id = ?",
        [updateEmployee.roleupdate, updateEmployee.employeeupdate])
    })




  QuestionPrompt();

}