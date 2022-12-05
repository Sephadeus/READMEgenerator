const licenseObj = {
  'None': "", 
  'Apache License 2.0': {
    badge: "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
    link: ""
  },
  'GNU General Public License v3.0': {
    badge: "",
    link: ""
  }, 
  'MIT License': {
    badge: "",
    link: ""
  }, 
  'BSD 2-Clause "Simplified" License': {
    badge: "",
    link: ""
  }, 
  'BSD 3-Clause "New" or "Revised" License': {
    badge: "",
    link: ""
  },
  'Boost Software License 1.0': {
    badge: "",
    link: ""
  },
  'Creative Commons Zero v1.0 Universal': {
    badge: ,
    link: 
  },
  'Eclipse Public License 2.0': {
    badge: ,
    link: 
  },
  'GNU Affero General Public License v3.0': {
    badge: ,
    link: 
  },
  'GNU General Public License v2.0': {
    badge: ,
    link: 
  },
  'GNU Lesser General Public License v2.1': {
    badge: ,
    link: 
  },
  'Mozilla Public License 2.0': {
    badge: ,
    link: 
  },
  'The Unilicense': {
    badge: ,
    link: 
  }  
}

// const licenseLinks = {
//   'None': "", 
//   'Apache License 2.0',
//   'GNU General Public License v3.0', 
//   'MIT License', 
//   'BSD 2-Clause "Simplified" License', 
//   'BSD 3-Clause "New" or "Revised" License',
//   'Boost Software License 1.0',
//   'Creative Commons Zero v1.0 Universal',
//   'Eclipse Public License 2.0',
//   'GNU Affero General Public License v3.0',
//   'GNU General Public License v2.0',
//   'GNU Lesser General Public License v2.1',
//   'Mozilla Public License 2.0',
//   'The Unilicense' 
// }

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None'){
    return "";
  } else if (license == 'Apache License 2.0'){
    const licenseBadge = ``
    return licenseBadge;
  } else if (license == 'GNU General Public License v3.0'){
    const licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    return licenseBadge;
  } else if (license == 'MIT License'){
    const licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    return licenseBadge;
  } else if (license == 'BSD 2-Clause "Simplified" License'){
    const licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    return licenseBadge;
  } else if (license == 'BSD 3-Clause "New" or "Revised" License'){
    const licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    return licenseBadge;
  } else if (license ==  'Boost Software License 1.0'){
    const licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    return licenseBadge;
  } else if (license == 'Creative Commons Zero v1.0 Universal'){
    const licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    return licenseBadge;
  } else if (license ==  'Eclipse Public License 2.0'){
    const licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    return licenseBadge;
  } else if (license == 'GNU Affero General Public License v3.0'){
    const licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    return licenseBadge;
  } else if (license == 'GNU General Public License v2.0'){
    const licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    return licenseBadge;
  } else if (license == 'GNU Lesser General Public License v2.1'){
    const licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    return licenseBadge;
  } else if (license == 'Mozilla Public License 2.0'){
    const licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    return licenseBadge;
  } else if (license == 'The Unilicense'){
    const licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    return licenseBadge;
  } else {
    return "WTFPL";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return "";
  } else {
  return licenseSection;
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `#${answers.title}\n
  \n ## Description
  \n
  \n${answers.description}
  \n
  \n- What is the purpose of this project?
  \n${answers.purpose}
  \n- What was our motivation?
  \n${answers.motivation}
  \n- What problem does it solve?
  \n${answers.problem}
  \n- What did we learn?
  \n${answers.learned}
  \n- What makes our app different from others?
  \n${answers.special}
  \n- Some challenges we faced were:
  \n${answers.challenges}
  \n
  \n## Table of Contents (Optional)
  \n
  \nIf your README is long, add a table of contents to make it easy for users to find what they need.
  \n
  \n- [Installation](#installation)
  \n- [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
  Provide instructions and examples for use. Include screenshots as needed.

  To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
  '''
      md
      ![alt text](assets/images/screenshot.png)
      '''
  
  ## Credits
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
  
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.`;
}

module.exports = generateMarkdown;
