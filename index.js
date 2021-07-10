//const connection = require("../config/connections");
const { log } = require("console");
const { resolveSoa } = require("dns");
const fs = require("fs")
const inquirer = require("inquirer");
const connection = require("./config/connections");

const userPrompt = () => {
    return inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'Please choose from the following actions.',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role']
    }])
        .then((answer) => {
            switch (answer.action) {
                case 'View all departments':
                    viewDepartments();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'View all employees':
                    viewEmployees();
                    break;
                case 'Add a department':
                    addDepartmentPrompt();
                    break;
                case 'Add a role':
                    addRolesPrompt();
                    break;
                case 'Add an employee':
                    addEmployeePrompts();
                    break;
                case 'Update employee role':
                    updateEmployeePrompt();
                    break;
            }
        });
}


//create table to view all departments
function viewDepartments() {
    // Get Data - Query DB
    connection.query(`SELECT * FROM department`, (err, result) => {
        console.table(result);
        return userPrompt()
    });

};

function viewRoles() {
    connection.query(`Select * FROM roles`, (err, result) => {
        console.table(result)
        return userPrompt()
    });
};

function viewEmployees() {
    connection.query(`SELECT 

    employee.id, employee.first_name, employee.last_name, roles.title AS job_title, department.name AS department, roles.salary
    
    FROM employee 
    
    JOIN roles ON employee.role_id = roles.id
    
    JOIN department ON roles.department_id = department.id;
    `, (err, result) => {
        console.table(result)
        return userPrompt()
    });
};

const addEmployeePrompts = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What's the first name of the employee?",
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What's the last name of the employee?",
        },
        {
            type: 'list',
            name: 'role_id',
            message: "Please enter the employee's role ID.",
            choices: ['1-Manager', '2-Assistang Manager', '3-Employee', '4-Intern']
        },
        {
            type: 'list',
            name: 'employee_id',
            message: "Please enter the employee/manager ID.",
            choices: ['0', '1', '2', '3']
        }
    ])
}

// const addDepartmentPrompt = () => {
//     return inquirer.prompt([
//         {
//             type: 'list',
//             name: 'addDepartment',
//             message: "Would you like to add a new department?",
//             choices: ['Yes', 'No']  
//         }
//     ]).then((answer) => {
//         switch(answer.addDepartment) {
//             case 'Yes':
//                 theNewDepartment()
//                 break;
//             case 'No':
//                 userPrompt()
//                 break;
//         }
//     })
// }

userPrompt()


