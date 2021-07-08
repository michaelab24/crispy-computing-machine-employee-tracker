//const connection = require("../config/connections");
const fs = require("fs")
const inquirer = require("inquirer");

const userPrompts = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'menu',
        message: 'Please choose from the following actions.',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
    }])
}


const employeePrompts = () => {
    inquirer.prompt([
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
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's github username.",
        },
    ])
}

