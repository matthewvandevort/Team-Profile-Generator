const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, gitHubUser) {
        super (name, id, email);
        this.gitHubUser = gitHubUser;
        this.title = 'Engineer';
    }

    getRole () {
        return this.title;
    }

    getGitHubUser () {
        return this.gitHubUser;
    }
}

module.exports = Engineer;