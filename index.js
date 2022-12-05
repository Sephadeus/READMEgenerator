// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of this project?", 
  "Provide a short description explaining the what, why, and how of your project.",
  "What is the purpose of this project?", 
  "What was/were the motivation(s) for building this project?", 
  "What is the problem (if any) that this project solves? What does it do for the user?", 
  "What did you learn from building this project?", 
  "What makes this project different from similar apps?", 
  "What were some of the biggest challenges building this project?", 
  "Please provide a step by step set of instructions on how to install and run this application.", 
  "Give a detailed explanation about how to use this application.",
  "List your collaborators, if any, with links to their GitHub profiles.",
  "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If no third party assets were used, please input 'No third party assets were used to build this project'.",
  "If you followed tutorials, please list them and include links to those here.",
  "Do you have any badges you want to attach to this project?",
  "What type of license does this project have?", 
  "How can developers contribute to this project?", 
  "What is your GitHub username?",
  "What is the best email address to reach you at for questions about this project?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile("genREADME.md", markdownPageContent, (error) =>
    error ? console.error(error) : console.log("Saved!")
  );
}

// TODO: Create a function to initialize app
function init() {
  promptUser();

}

// Function call to initialize app
init();

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "description",
        message: questions[1],
      },
      {
        type: "input",
        name: "purpose",
        message: questions[2],
      },
      {
        type: "input",
        name: "motivation",
        message: questions[3],
      },
      {
        type: "input",
        name: "problem",
        message: questions[4],
      },
      {
        type: "input",
        name: "learned",
        message: questions[5],
      },
      {
        type: "input",
        name: "special",
        message: questions[6],
      },
      {
        type: "input",
        name: "challenges",
        message: questions[7],
      },
      {
        type: "input",
        name: "installation",
        message: questions[8],
      },
      {
        type: "input",
        name: "usage",
        message: questions[9],
      },
      {
        type: "input",
        name: "collaborators",
        message: questions[10],
      },
      {
        type: "input",
        name: "thirdParty",
        message: questions[11],
      },
      {
        type: "input",
        name: "tutorials",
        message: questions[12],
      },
      {
        type: "input",
        name: "badges",
        message: questions[13],
      },
      {
        type: "list",
        name: "license",
        message: questions[14],
        choices: [
          'None', 
          'Apache License 2.0',
          'GNU General Public License v3.0', 
          'MIT License', 
          'BSD 2-Clause "Simplified" License', 
          'BSD 3-Clause "New" or "Revised" License',
          'Boost Software License 1.0',
          'Creative Commons Zero v1.0 Universal',
          'Eclipse Public License 2.0',
          'GNU Affero General Public License v3.0',
          'GNU General Public License v2.0',
          'GNU Lesser General Public License v2.1',
          'Mozilla Public License 2.0',
          'The Unilicense' ]
      },
      {
        type: "input",
        name: "howToContribute",
        message: questions[15],
      },
      {
        type: "input",
        name: "github",
        message: questions[16],
      },
      {
        type: "input",
        name: "email",
        message: questions[17],
      }
      ])
    .then((answers) => {
      const markdownPageContent = generateMarkdown(answers);

      fs.writeFile("myREADME.md", markdownPageContent, (err) =>
        err
          ? console.log(err)
          : console.log("Successfully created genREADME.md!")
      );
    })
    .catch((err) => { 
      console.log(err)
    });
}
