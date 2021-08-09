class Employee {
    constructor(name, email, id,) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = 'Employee';
    }

    getName () {
        return this.name;
    }
    
    getEmail () {
        return this.email;
    }

    getId () {
        return this.id;
    }
    getRole () {
        return this.title;
    }
}

module.exports = Employee;