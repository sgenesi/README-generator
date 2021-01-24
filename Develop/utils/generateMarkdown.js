const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license) {
    return '';
  }

  return `
  ![badge](https://img.shields.io/badge/license-${data.license}-blueviolet)
  `;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == GNU) {
    return 'https://www.gnu.org/licenses/licenses.en.html#GPL';
  } else if (license == Apache) {
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  } else if (license == Ms - PL) {
    return 'https://opensource.org/licenses/MS-PL';
  } else if (license == BSD) {
    return 'https://opensource.org/licenses/BSD-2-Clause';
  } else if (license == CDDL) {
    return 'https://opensource.org/licenses/CDDL-1.0';
  } else if (license == EPL) {
    return 'https://www.eclipse.org/legal/epl-v10.html';
  } else if (license == MIT) {
    return 'https://opensource.org/licenses/MIT';
  } else {
    return '';
  };

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  const renderLicenseSection = license => {
    if (!license) {
      return '';
    }

    return `
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-blueviolet)<br />
  This application is covered by the ${data.license} license.
  `;
  };

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.projectTitle}

  ${renderLicenseBadge(license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Test](#test)
  - [Question](#questions)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contribute}

  ## Test
  ${data.test}

  ## Questions
  ${data.questions}<br />
  <br />
  Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  Email me with any questions: ${data.email}<br /><br />

  ${renderLicenseSection(license)}
  ${renderLicenseLink(license)}
`;
  }
};

module.exports = generateMarkdown;
