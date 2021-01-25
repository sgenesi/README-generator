// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")
const writeFileAsync = util.promisify(writeToFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the project title? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter your project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter any installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should your project be used?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter guidelines on how others can contribute to your project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter instructions for testing your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the appropiate license for your project:',
        choices: ['GNU', 'Apache', 'Ms-PL', 'BSD', 'CDDL', 'EPL', 'MIT']
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What do I do if I have an issue? (Required)',
        validate: questionsInput => {
            if (questionsInput) {
                return true;
            } else {
                console.log('Please enter waht to do if there are issues!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("README.md file has been created!")
    });
}

// TODO: Create a function to initialize app
async function init() {
    try {

        // Prompt Inquirer questions
        const data = await inquirer.prompt(questions);
        const generateContent = generateMarkdown(data);

        // Write markdown to file
        await writeFileAsync('./dist/ExampleREADME.md', generateContent);
        console.log('README.md created succesfully!');
    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();

