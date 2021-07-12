const { prompt } = require("inquirer");
const db = require("./db/index");
const dbConnect = require("./config/connections");
const table = require('console');
const inquirer = require("inquirer");


const userPrompt = () => {
    prompt([{
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
                    addDepartment();
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



function viewDepartments() {
    dbConnect.query(`SELECT * FROM department`, (err, result) => {
        console.table(result);
        return userPrompt()
    });

};

function viewRoles() {
    dbConnect.query(`Select * FROM roles`, (err, result) => {
        console.table(result)
        return userPrompt()
    });
};

function viewEmployees() {
    dbConnect.query(`SELECT 

    employee.id, employee.first_name, employee.last_name, roles.title AS job_title, department.name AS department, roles.salary
    
    FROM employee 
    
    JOIN roles ON employee.role_id = roles.id
    
    JOIN department ON roles.department_id = department.id;
    `, (err, result) => {
        console.table(result)
        return userPrompt()
    });
};

function addDepartment() {
    inquirer
        .prompt([
            {
                name: "departmentName",
                type: "input",
                message: "New Department Name: ",
            },
        ])
        .then(function (response) {
            dbConnect.query("INSERT INTO department SET ?", {
                name: response.departmentName,
            },
                function (err) {
                    if (err) throw err;
                    userPrompt();
                }
            );
        });
};

function addRolesPrompt() {
    inquirer
        .prompt([
            {
                name: "roleName",
                type: "input",
                message: "New Role Title:  ",
            },
            {
                name: "roleSalary",
                type: "input",
                message: "New Role Salary: ",
            },
            {
                name: "roleDepartment",
                type: "input",
                message: "New Role Department ID: ",
            }

        ])

        .then(function (response) {
            dbConnect.query("INSERT INTO roles SET ?", {
                title: response.roleName,
                salary: response.roleSalary,
                department_id: response.roleDepartment
            },
                function (err) {
                    if (err) throw err;
                    userPrompt();
                }
            );
        })
};

function addEmployeePrompts() {
    inquirer
        .prompt([
            {
                name: "firstName",
                type: "input",
                message: "Employee first name: "
            },
            {
                name: "lastName",
                type: "input",
                message: "Employee last name: "
            },
            {
                name: "employeeRole",
                type: "input",
                message: "Employee Role ID: "
            },
            {
                name: "employeeManager",
                type: "input",
                message: "Employee Manager ID: "
            }
        ])

        .then(function (response) {
            dbConnect.query("INSERT INTO employee SET ?", {
                first_name: response.firstName,
                last_name: response.lastName,
                role_id: response.employeeRole,
                manager_id: response.employeeManager,
            },
                function (err) {
                    if (err) throw err;
                    userPrompt();
                }
            );
        });
}

const updateEmployeePrompt = () => {
    console.log('Unfortunately this section of the app is under maintenance, sorry for the inconvenience')
    return userPrompt()
}
   

userPrompt()


// function viewDepartments() {
//     db.viewAllDepartments()
//     .then(([rows]) => {
//         let departments = rows
//         console.log('\n')
//         console.table(departments)
//     })
//     .then(() => userPrompt()) 
// };

// no bueno
// function viewEmployees() {
//     db.selectAllEmployees()
//     .then (([rows]) => {
//         let employees = rows
//         console.log("\n")
//         console.table(employees)
//     })
//     .then(() => userPrompt())
// }

// const addEmployeePrompts = () => {
//     prompt([
//         {
//             type: 'input',
//             name: 'first_name',
//             message: "What's the first name of the employee?",
//         },
//         {
//             type: 'input',
//             name: 'last_name',
//             message: "What's the last name of the employee?",
//         },
//         {
//             type: 'list',
//             name: 'role_id',
//             message: "Please enter the employee's role ID.",
//             choices: ['1-Manager', '2-Assistang Manager', '3-Employee', '4-Intern']
//         },
//         {
//             type: 'list',
//             name: 'employee_id',
//             message: "Please enter the employee/manager ID.",
//             choices: ['0', '1', '2', '3']
//         }
//     ])
// }

