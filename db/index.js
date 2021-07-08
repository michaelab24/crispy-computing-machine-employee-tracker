const connection = require("../config/connections");

class Whatever {
    constructor(connection){
        this.connection = connection;
    }

findAllEmployees() {
    return this.connection.promise().query(
        "SELECT employee.id, dskjfsfd.mnameasdhasdkjhas,  "
    )
}
}

module.exports = new Whatever(connection)