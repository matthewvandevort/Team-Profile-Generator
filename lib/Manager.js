const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, email, id, officeNumber) {
        super (name, email, id,);
        this.officeNumber = officeNumber;
        this.title = 'Manager';
    }

    getRole () {
        return this.title;
    }
    
    getOfficeNumber (){
        return this.officeNumber;
    }
    
}

module.exports = Manager;