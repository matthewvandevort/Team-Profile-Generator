const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, email, id, gitHubUser) {
        super (name, email, id);
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