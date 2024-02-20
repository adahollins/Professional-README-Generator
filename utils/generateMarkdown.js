// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Credits
${data.credit}

## Tests
${data.tests}

## Questions
For any questions, you can contact me through my GitHub (${data.github}) or my email (${data.email}).`;
}

module.exports = generateMarkdown;
