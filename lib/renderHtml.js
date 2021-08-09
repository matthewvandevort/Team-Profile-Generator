const fs = require('fs');
const path = require('path');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const srcDir = path.resolve(__dirname, '../src');

const create = getEmployees => {
    const htmlPage = [];

    htmlPage.push(...getEmployees.filter(Employee => Employee.getRole() === 'Manager')
        .map(manager => createManager(manager))
    );
    htmlPage.push(...getEmployees.filter(Employee => Employee.getRole() === 'Engineer')
        .map(engineer => createEngineer(engineer))
    );
    htmlPage.push(...getEmployees.filter(Employee => Employee.getRole() === 'Intern')
        .map(intern => createIntern(intern))
    );

    return renderIndex(htmlPage.join(''));

};

const createManager = manager => {
    let src = fs.readFileSync(path.resolve(srcDir, 'manager.html'), 'utf8');
    src = changeHolder(src,'name', manager.getName());
    src = changeHolder(src,'role', manager.getRole());
    src = changeHolder(src,'email', manager.getEmail());
    src = changeHolder(src,'id', manager.getId());
    src = changeHolder(src,'officeNumber', manager.getOfficeNumber());
    return template;
}

const createEngineer = engineer => {
    let src = fs.readFileSync(path.resolve(srcDir, 'engineer.html'), 'utf8');
    src = changeHolder(src,'name', engineer.getName());
    src = changeHolder(src,'role', engineer.getRole());
    src = changeHolder(src,'email', engineer.getEmail());
    src = changeHolder(src,'id', engineer.getId());
    src = changeHolder(src,'github', engineer.getGitHubUser());
    return template;
}

const createManager = intern => {
    let src = fs.readFileSync(path.resolve(srcDir, 'intern.html'), 'utf8');
    src = changeHolder(src,'name', intern.getName());
    src = changeHolder(src,'role', intern.getRole());
    src = changeHolder(src,'email', intern.getEmail());
    src = changeHolder(src,'id', intern.getId());
    src = changeHolder(src,'school', intern.getSchoolName());
    return template;
}

const renderIndex = htmlPage => {
    const src = fs.readFileSync(path.resolve(srcDir, 'index.html'), 'utf8');
    return changeHolder(src, 'team', htmlPage);
};

const changeHolder = (src, holder, value) => {
    const pattern = new RegExp('{{ ' + holder + '}}', 'gm');
    return src.replace(pattern, value);
}

module.exports = create;

