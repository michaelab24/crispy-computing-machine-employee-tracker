// const connection = require("../config/connections")

// class DB {
//     constructor(connection) {
//         this.connection = connection
//     }
//     viewAllDepartments() {
//         return this.connection.promise().query(`SELECT * FROM department`)
//     };
//     seeAllRoles() {
//         return this.connection.promise().query(`SELECT * FROM roles`)
//     }
//     selectAllEmployees() {
//         return this.connection.promise().query(`SELECT 

//         employee.id, employee.first_name, employee.last_name, roles.title AS job_title, department.name AS department, roles.salary
        
//         FROM employee 
        
//         JOIN roles ON employee.role_id = roles.id
        
//         JOIN department ON roles.department_id = department.id;`)
//     }
//     createDepartment(department) {
//         return this.connection.promise().query('INSERT INTO department SET ?', department)
//     }

// }
// module.exports = new DB(connection)
