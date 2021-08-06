const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, email, id, role, schoolName) {
        super (name, email, id, role);
        this.schoolName = schoolName;
    }

    getSchoolName (){
        return this.schoolName;
    }
}

module.exports = Intern;