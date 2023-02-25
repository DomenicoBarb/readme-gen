// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter your first and last name.'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage instructions for your project:',
  },
  {
    type: 'input',
    name: 'screenshot',
    message: 'Add screenshot file to the "assets/images" folder and enter file name here:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license do you want to use for your project?',
    choices: ['MIT', 'Apache 2.0', 'Mozilla 2.0', 'GPLv2', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide guidelines for contributing to your project (if applicable):',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide instructions for testing your project (if any):',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success! Your README.md file has been generated!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();
