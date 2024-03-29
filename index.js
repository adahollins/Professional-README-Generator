const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe the project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions installing it?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the project?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license are you using for the project?',
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Who contributed in this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for this project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is you email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github user?',
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
    writeToFile('./UserREADME.md', generateMarkdown(answers))
    });
};

// function call to initialize program
init();