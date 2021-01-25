const fs = require('fs');

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
   # ${data.projectTitle} 
   
   ![badge](https://img.shields.io/badge/license-${data.license}-blueviolet)

## Description
${data.description}

---
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

---
## Installation
 ${data.installation}

 ---
## Usage
${data.usage}

---
## License

![badge](https://img.shields.io/badge/license-${data.license}-blueviolet)

---
## Contribute
${data.contribute}

 ---
## Tests
${data.tests}

---
## Questions
${data.questions}

GitHub: [${data.username}](https://github.com/${data.username})

Email: ${data.email}
    `;
}

module.exports = generateMarkdown;
