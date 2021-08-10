const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputLocation = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/renderHtml');
const teamMembers = [];


const employeeQuest = [
    {
        type: 'input',
        message: 'Please enter the team managers name.',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'Please enter the managers id number.',
        name: 'managerId',
    },
    {
        type: 'input',
        message: 'Please enter the managers e-mail address.',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'Please enter the managers office number.',
        name: 'managerOfficeNum',
    },
    {
        type: 'list',
        message: 'What type of team member would you like to add next?',
        name: 'teamMember',
        choices: [
            'Engineer', 'Intern', 'I am done adding team members.',
        ],
    },
    
];

const engineerQuest = [
    {
        type: 'input',
        message: 'Please enter the engineers name.',
        name: 'engineerName',
    },
    {
        type: 'input',
        message: 'Please enter the engineers id number.',
        name: 'engineerId',
    },
    {
        type: 'input',
        message: 'Please enter the engineers e-mail address.',
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: 'Please enter the engineers GitHub username.',
        name: 'engineerGithub',
    },
    {
        type: 'list',
        message: 'What type of team member would you like to add next?',
        name: 'teamMember',
        choices: [
            'Engineer', 'Intern', 'I am done adding team members.',
        ],
    },
    
];


const internQuest = [
    {
        type: 'input',
        message: "Please enter the intern's name.",
        name: 'internName',
    },
    {
        type: 'input',
        message: "Please enter the intern's id number.",
        name: 'internId',
    },
    {
        type: 'input',
        message: "Please enter the intern's e-mail address.",
        name: 'internEmail',
    },
    {
        type: 'input',
        message: "Please enter the intern's school.",
        name: 'internSchool',
    },
    {
        type: 'list',
        message: 'What type of team member would you like to add next?',
        name: 'teamMember',
        choices: [
            'Engineer', 'Intern', 'I am done adding team members.',
        ],
    },
    
];

function engineerQuestSort() {
    inquirer
        .prompt(engineerQuest)
        .then(answers => {
            let engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub,);
            teamMembers.push(engineer);
            if (answers.teamMember === 'Engineer') {
                engineerQuestSort();                
            } else if (answers.teamMember === 'Intern') {
                internQuestSort();
            } else {
                writeHtml();
            }
        })
}

function internQuestSort() {
    inquirer
        .prompt(internQuest)
        .then(answers => {
            let intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool,);
            teamMembers.push(intern);
            if (answers.teamMember === 'Engineer') {
                engineerQuestSort();                
            } else if (answers.teamMember === 'Intern') {
                internQuestSort();
            } else {
                writeHtml();
            }
        })
}

function init(){
    inquirer
        .prompt(employeeQuest)
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
            teamMembers.push(manager);
            if (answers.teamMember === 'Engineer') {
                console.log('It is an engineer');
                engineerQuestSort();
            } else if (answers.teamMember === 'Intern') {
                console.log('It is an intern.');
                internQuestSort();
            } else {
                writeHtml();
            }
        })
}

function writeHtml() {
    fs.writeFile(outputLocation, render(teamMembers), (err) => {
        err ? console.log(err) : console.log('Succesfully generated the HTML!');
    })
}

init();