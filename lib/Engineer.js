const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, email, id, role, gitHubUser) {
        super (name, email, id, role);
        this.gitHubUser = gitHubUser;
    }

    getGitHubUser (){
        return this.gitHubUser;
    }
}

module.exports = Engineer;