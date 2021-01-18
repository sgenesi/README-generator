// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.projectTitle}</h1>

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Test](#test)
  - [License](#license)
  - [Question](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contribute}

  ## Test
  ${data.test}

  ## License
  This application is covered by the ${data.license} license.

  ## Questions
  ${data.questions}<br />
  <br />
  Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  Email me with any questions: ${data.email}<br /><br />
`;
}

module.exports = generateMarkdown;
