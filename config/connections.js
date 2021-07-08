const mysql = require("mysql");

const connection = mysql.createConnection({
host: "",
user: "",
password: "",
database: "employees"
})



connection.connect(function (err) {
    if (err) throw err
});

module.export = connection