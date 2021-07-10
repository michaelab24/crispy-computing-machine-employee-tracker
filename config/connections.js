const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
host: "localhost",
user: "root",
password: "SQLPassword12",
database: "employees"
})



connection.connect(function (err) {
    if (err) throw err
});

module.exports = connection