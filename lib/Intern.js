const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, schoolName) {
        super (name, id, email);
        this.schoolName = schoolName;
        this.title = 'Intern';

    }

    getRole () {
        return this.title;
    }


    getSchoolName (){
        return this.schoolName;
    }
}

module.exports = Intern;