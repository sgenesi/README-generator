const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license) {
    return '';
  }

  return `
  ![badge](https://img.shields.io/badge/license-${userResponses.license}-blueviolet)
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
  ![badge](https://img.shields.io/badge/license-${userResponses.license}-blueviolet)<br />
  This application is covered by the ${userResponses.license} license.
  `;
  };

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(userResponses) {

    let draftTOC = `## Table of Contents`;

    if (userResponses.installation !== '') { draftTOC += ` * [Installation](#installation)` };

    if (userResponses.usage !== '') { draftToC += ` * [Usage](#usage)` };

    if (userResponses.contribute !== '') { draftTOC += ` * [Contribute](#contribute)` };

    if (userResponses.test !== '') { draftTOC += ` * [Test](#test)` };

    let draftMarkdown =
      `# ${userResponses.title}
  ${renderLicenseBadge(license)}
  
  ## Description 
  
  ${userResponses.description}`

    // Add Table of Contents
    draftMarkdown += draftToC;

    // Add License section 
    draftMarkdown += `
  ${renderLicenseSection(license)}`;

    // Add installation section if applicable
    if (userResponses.installation !== '') {

      draftMarkdown +=
        `
    
    ## Installation
    
    ${userResponses.installation}`
    };

    // Add usage section if applicable
    if (userResponses.usage !== '') {

      draftMarkdown +=

        `
    
    ## Usage 
    
    ${userResponses.usage}`
    };

    // Add contribute section if applicable
    if (userResponses.contribute !== '') {
      `
    
    ## Contributing
    
    ${userResponses.contributing}`
    };

    // Add test section if applicable
    if (userResponses.test !== '') {

      draftMarkdown +=
        `
    
    ## Tests
    
    ${userResponses.tests}`
    };

    // Questions section
    let draftDev =
      `
  ---
  
  ## Questions?
  
  If you have questions, please feel free to contact me:
 
  GitHub: ${userResponses.username}
  `;

    if (userInfo.email !== null) {

      draftDev +=
        `
  Email: ${userResponses.email}
  `};

    return draftMarkdown;
  }
};

module.exports = generateMarkdown;
