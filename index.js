const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const generateMarkdown = require("./utils/generateMarkdown")

const userQuestions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'How would you describe your project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information for your project?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines for your project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please provide test instructions for your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license are you using?',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'userName',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'emailAddress',
    message: 'What is your email address?',
  },

];

function writeToFile(filename, data) {
  fs.writeFileSync(path.join(filename), data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`File ${filename} created successfully.`);
    }
  });
}

function init() {
  inquirer.prompt(userQuestions).then((data) => {
    writeToFile('README.md', generateMarkdown({...data}));
  });
}

init();
