class Employee {
    constructor(name, email, id, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    retriveName () {
        return this.name
    }
    
    retriveEmail () {
        return this.email
    }

    retriveId () {
        return this.id
    }
    retriveRole () {
        return this.role
    }
}

module.exports = Employee;