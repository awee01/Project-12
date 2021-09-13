  
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
            name: "option",
            choices: 
              [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
              ]
        })

//linking to seperate functions for options

        .then(function ({option}) 
        {
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

            }
        });
}

//view all departments
function viewDepartment() {

    db.query("SELECT * from department",

 

        function (err, res) {
            if (err) throw err;
            console.table(res)

            QuestionPrompt();

        })
}

//view all roles
function viewRole() {
    

    db.query("SELECT * from employeeRole",

    // FROM roles
    // LEFT JOIN department ON roles.department_id = department.id


        function (err, res) {
            if (err) throw err;
            console.table(res)

            QuestionPrompt();

        })
}

//view all employees
function viewEmployee() {


    db.query("SELECT * from employee",

    // FROM employee
    // LEFT JOIN role ON employee.employeeRole_id = role.id
    // LEFT JOIN department ON employeeRole.department_id = department.id
    // LEFT JOIN employee manager ON employee.manager_id = manager.id`;

        function (err, res) {
            if (err) throw err;
            console.table(res)

            QuestionPrompt();

        })
}

//add a department
function addDepartment() {

    inquirer.prompt([

        {
            type: 'input',
            name: 'newdepartment',
            message: 'Enter the new Department',
        }

    ]).then((addnewdepartment) => {

        db.query("INSERT INTO department (department_name) VALUES (?)",
            [addnewdepartment.newdepartment],

            function (err) {
                if (err) throw err;
                QuestionPrompt();
            })
    })
}

//add a role
function addRole() {

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
            [addnewRole.newjobtitle, addnewRole.newsalary, addnewRole.newdepartmentid],

            function (err) {
                if (err) throw err;
                QuestionPrompt();
    
             })
    })
}

//add an employee
function addEmployee() {

    inquirer.prompt([{
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
            [addnewEmployee.newfirstname, addnewEmployee.newlastname, addnewEmployee.newroleid, addnewEmployee.newmanagerid],

            function (err) {
                if (err) throw err;
                QuestionPrompt();
    
            })

    })
}


//update an existing employee
function updateEmployee() {
    inquirer
        .prompt([{
                type: "input",
                message: "Enter the employee ID you would like to update",
                name: "employeeupdate"
            },

            {
                type: "input",
                message: "What is the new role ID of the employee?",
                name: "roleupdate"
            }
        ]).then((updateEmployee) => {

            db.query("UPDATE employee SET employeeRole_id = ? WHERE id = ?",
                [updateEmployee.roleupdate, updateEmployee.employeeupdate],

                function (err) {
                    if (err) throw err;
                    QuestionPrompt();
        
                })
        })
}

 //function to delete employees
 //function deleteEmployee() {
 //  
 //db.query("SELECT * FROM employee")
  
