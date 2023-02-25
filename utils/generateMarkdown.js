// TODO: Create a function that returns a license badge (MIT License, Apache License 2.0, Mozilla Public License 2.0 or none) based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "Apache 2.0":
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    case "Mozilla 2.0":
      return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
    case "GPLv2":
      return "![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "Mozilla 2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    case "GPLv2":
      return "https://www.gnu.org/licenses/gpl-2.0";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `## License

This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description:
${data.description}

## Table of Contents:

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#Questions)
* [Email](#Email)
* [Github](#Github)
* [Owner](#Owner)

## Installation:

${data.installation}

## Usage:

${data.usage}


${renderLicenseSection(data.license)}<br>
${renderLicenseBadge(data.license)}

## Contributing:

${data.contributing}

## Tests:

${data.tests}

## Questions:
## Email:
If you have any questions email me directly at ${data.email}.

## Github:
Please visit my [GitHub](https://github.com/${data.username}) to view my other work.

## Owner:
${data.name}
`;
}

module.exports = generateMarkdown;
