const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
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
  
],
