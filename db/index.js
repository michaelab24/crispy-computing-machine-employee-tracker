const connection = require("../config/connections")

class DB {
    constructor(connection) {
        this.connection = connection
    }
    createDepartment(department) {
        return this.connection.promise().query(`INSERT INTO department SET ?`, department)
    }

}
module.exports = new DB(connection)
