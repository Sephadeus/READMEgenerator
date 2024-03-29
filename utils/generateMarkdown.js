const licenseObj = {

  'None': {
    badge: '',
    link: ''
  },

  'Apache License 2.0': {
    badge: "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
    link: "https://opensource.org/licenses/Apache-2.0"
  },

  'GNU General Public License v3.0': {
    badge: "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    link: "https://www.gnu.org/licenses/gpl-3.0"
  }, 

  'MIT License': {
    badge: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    link: "https://opensource.org/licenses/MIT"
  },

  'BSD 2-Clause "Simplified" License': {
    badge: "![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)",
    link: "https://opensource.org/licenses/BSD-2-Clause"
  },

  'BSD 3-Clause "New" or "Revised" License': {
    badge: "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]",
    link: "https://opensource.org/licenses/BSD-3-Clause"
  },

  'Boost Software License 1.0': {
    badge: "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)",
    link: "https://www.boost.org/LICENSE_1_0.txt"
  },

  'Creative Commons Zero v1.0 Universal License': {
    badge: "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)",
    link: "http://creativecommons.org/publicdomain/zero/1.0/"
  },

  'Eclipse Public License 2.0': {
    badge: "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)",
    link: "https://opensource.org/licenses/EPL-1.0"
  },

  'GNU Affero General Public License v3.0': {
    badge: "![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)",
    link: "https://www.gnu.org/licenses/agpl-3.0"
  },

  'GNU General Public License v2.0': {
    badge: "![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)",
    link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
  },

  'Mozilla Public License 2.0': {
    badge: "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)",
    link: "https://opensource.org/licenses/MPL-2.0"
  },

  'The Unilicense': {
    badge: "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)",
    link: "http://unlicense.org/"
  },

  'The WTFPL': {
    badge: "![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)",
    link: "http://www.wtfpl.net/about/"
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
  const licenseBadge = licenseObj[license].badge;
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = licenseObj[license].link;
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return "";
  } else {
    renderLicenseBadge(license);
    renderLicenseLink(license);
  const licenseSection = `\nThis project adheres to ${license} standards. You can read more about this license and the privileges it does or does not allow at this link here --> ${renderLicenseLink(license)}.`;
  return licenseSection;
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  // renderLicenseBadge(answers.license);
  // renderLicenseLink(answers.license);
  // renderLicenseSection(answers.license);

  return `${renderLicenseBadge(answers.license)} ![badge](${answers.badges})\n
  # ${answers.title}\n
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [How to Contribute](#how-to-contribute)
  - [License](#license)
  \n ## Description
  \n${answers.description}
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
  \n## Installation
  \n${answers.installation}
  \n## Usage
  \n${answers.usage}
  \n## Credits
  \nThe completion of this application is accredited to: 
  \n${answers.credits}
  \nThird party applications used are: ${answers.thirdParty || "N/A"}
  \nThe tutorials which helped get this project accomplished: ${answers.tutorials || "N/A"} 
  \n## License
  \n${renderLicenseSection(answers.license)}  
  \n---
  \n## Badges
  \n${answers.badges || "none"}
  \n## How to Contribute
  \n${answers.howToContribute}
  \n## Questions
  \nIf you have any questions about this application, please contact ${answers.github} on GitHub at ${answers.githubLink} or by email at ${answers.email}.
  `;
}

module.exports = generateMarkdown, licenseObj;
