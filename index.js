// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const licenseObj = {

  None: {
    badge: "",
    link: ""
  },

  "Apache License 2.0": {
    badge: "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
    link: "https://opensource.org/licenses/Apache-2.0"
  },

  "GNU General Public License v3.0": {
    badge:
      "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    link: "https://www.gnu.org/licenses/gpl-3.0"
  },

  "MIT License": {
    badge:
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    link: "https://opensource.org/licenses/MIT"
  },

  'BSD 2-Clause "Simplified" License': {
    badge:
      "![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)",
    link: "https://opensource.org/licenses/BSD-2-Clause"
  },

  'BSD 3-Clause "New" or "Revised" License': {
    badge:
      "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]",
    link: "https://opensource.org/licenses/BSD-3-Clause"
  },

  "Boost Software License 1.0": {
    badge:
      "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)",
    link: "https://www.boost.org/LICENSE_1_0.txt"
  },

  "Creative Commons Zero v1.0 Universal License": {
    badge:
      "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)",
    link: "http://creativecommons.org/publicdomain/zero/1.0/"
  },

  "Eclipse Public License 2.0": {
    badge: "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)",
    link: "https://opensource.org/licenses/EPL-1.0"
  },

  "GNU Affero General Public License v3.0": {
    badge:
      "![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)",
    link: "https://www.gnu.org/licenses/agpl-3.0"
  },

  "GNU General Public License v2.0": {
    badge:
      "![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)",
    link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
  },

  "Mozilla Public License 2.0": {
    badge:
      "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)",
    link: "https://opensource.org/licenses/MPL-2.0"
  },

  "The Unilicense": {
    badge:
      "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)",
    link: "http://unlicense.org/"
  },

  "The WTFPL": {
    badge:
      "![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)",
    link: "http://www.wtfpl.net/about/"
  },
};

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of this project?",
  "Provide a short description explaining the what, why, and how of your project.",
  "What was/were the motivation(s) for building this project?",
  "What is the problem (if any) that this project solves? What does it do for the user?",
  "What did you learn from building this project?",
  "What makes this project different from similar apps?",
  "What were some of the biggest challenges building this project?",
  "Please provide a step by step set of instructions on how to install and run this application.",
  "Give a detailed explanation about how to use this application.",
  "List your collaborators, if any, with links to their GitHub profiles.",
  "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If no third party assets were used, please input 'No third party assets were used to build this project'.",
  "If you followed tutorials, please list the name and link to those here.",
  "Please provide a link from Shields.io of any badges you want to attach to this project. Enter each link clearly separated by commas.",
  "What type of license do you want this project to have?",
  "How can developers contribute to this project?",
  "What is your GitHub username?",
  "Please provide a link to your GitHub profile. (Optional but recommended)",
  "Please provide the best email address to reach you at for questions about this project.",
  "What would you like to name this file? (Please include .md at the end)"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 
  fs.appendFile(fileName, data, (err) =>
  err
    ? console.log(err)
    : console.log("Successfully created " + fileName + " !")
);

}

// TODO: Create a function to initialize app
function init() {
  console.log("Thanks for using the READMEgenerator! Please answer the following questions as descriptively as possible using proper grammar and spelling:");
  promptUser();
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: questions[0]
      },
      {
        type: "input",
        name: "description",
        message: questions[1]
      },
      {
        type: "input",
        name: "motivation",
        message: questions[2]
      },
      {
        type: "input",
        name: "problem",
        message: questions[3]
      },
      {
        type: "input",
        name: "learned",
        message: questions[4]
      },
      {
        type: "input",
        name: "special",
        message: questions[5]
      },
      {
        type: "input",
        name: "challenges",
        message: questions[6]
      },
      {
        type: "input",
        name: "installation",
        message: questions[7]
      },
      {
        type: "input",
        name: "usage",
        message: questions[8]
      },
      {
        type: "input",
        name: "credits",
        message: questions[9]
      },
      {
        type: "input",
        name: "thirdParty",
        message: questions[10]
      },
      {
        type: "input",
        name: "tutorials",
        message: questions[11]
      },
      {
        type: "input",
        name: "badges",
        message: questions[12]
      },
      {
        type: "list",
        name: "license",
        message: questions[13],
        choices: Object.keys(licenseObj)
      },
      {
        type: "input",
        name: "howToContribute",
        message: questions[14]
      },
      {
        type: "input",
        name: "github",
        message: questions[15]
      },
      {
        type: "input",
        name: "githubLink",
        message: questions[16]
      },
      {
        type: "input",
        name: "email",
        message: questions[17]
      },
      {
        type: "input",
        name: "fileName",
        message: questions[18]
      }
    ])
    .then((answers) => {

      console.log(answers.fileName);
     

      console.log(generateMarkdown(answers));
      const markdownPageContent = generateMarkdown(answers);

      writeToFile(answers.fileName, markdownPageContent);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();