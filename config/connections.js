const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const dbConnect = mysql.createConnection({
host: "localhost",
user: "root",
password: "SQLPassword12",
database: "employees"
})



dbConnect.connect(function (err) {
    if (err) throw err
});

module.exports = dbConnect