// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = licenseInput => {
  if (!licenseInput) {
    return '';
  }

  return `
  ![badge](https://img.shields.io/badge/license-${data.license}-blueviolet)
  `;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = licenseInput => {
  if (!licenseInput) {
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
  return `
  <h1 align="center">${data.projectTitle}</h1>

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
`;
}

module.exports = generateMarkdown;
