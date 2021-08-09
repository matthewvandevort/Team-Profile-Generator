const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, email, id, schoolName) {
        super (name, email, id,);
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