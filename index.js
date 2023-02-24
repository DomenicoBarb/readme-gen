// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer")
const generateMarkdown = require("../utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter first and last name.'
      },
      {
      type: 'input',
      name: 'title',
      message: 'What is the name of the project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a description of the project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Describe how to install dependencies required for the project:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Add screenshot file to the "assets/images" folder and enter the file name here:'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Who are the contributors on this project?'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What testing was conducted to help develop this project?',
      },
      {
      type: 'list',
      message: 'Choose a license.',
      name: 'license',
      choices: ['The MIT License', 'Apache 2.0 License', 'Mozilla Public License 2.0', 'IBM Public License Version 1.0', 'No License']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
