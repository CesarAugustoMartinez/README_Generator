const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const questions = [
        {
            type: "input",
            name: "title",
            message: "What is your project's title?"
          },
          {
            type: "input",
            name: "authorName",
            message: "Waht is the Author name?"
          },
          {
            type: "input",
            name: "description",
            message: "Please write a description of your project:"
          },
          {
            type: "input",
            name: "installation",
            message: "What commands should be run to install your application?",
            default: "npm install, node index.js,"
          },
          {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the applicaton?",
          },
          {
            type: "input",
            name: "contribution",
            message: "What does the user need to know about contribution guidelines for the app?",
          },
          {
            type: "input",
            name: "test",
            message: "What command should be run to run tests?",
            default: "npm test"
          },
          {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["ISC","LGPL V3","MIT","GPL 3.0", "BSD 3", "None"]
          },       
          {
            type: "input",
            name: "gitHub",
            message: "What is your GitHub username?"
          },
          {
            type: "input",
            name: "email",
            message: "What is your email address?"
          } 
];
 
// function to write README file
function writeToFile(fileName, data) {


}


// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(response){
        console.log(response);
        console.log(generateReadme(response));

    })
    .catch(function(err){
        console.log(err);
    })

}

// function call to initialize program
init();

// Generating readme object
function generateReadme(data){
const readmeContent = 
`# ${data.title} 

![GitHub license](https://img.shields.io/badge/License-${data.license}-blue.svg)

## Description

${data.description}


Link : [Project Link](https://github.com/${data.gitHub})

---

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#tests)
- [Author Info](#author-info)

---

## Installation

To install necessary dependencies and load the app use the following command:

Commands 

\`\`\` 

${data.installation}

npm install 
node index.js,

\`\`\`

---

## Usage

${data.usage}


#### Screenshots

- Navbar

![picture](assets/images/Readme/Navbar.png)


[Back To The Top](#${data.title.replace(" ","-")})

---

## License

The application is covered under ${data.license} license.

Copyright (c) [2020] [${data.authorName}]

[Back To The Top](#${data.title.replace(" ","-")})

---

## Constributing

${data.contributing}

[Back To The Top](#${data.title.replace(" ","-")})

---

## Tests

To test, run the following command:

\`\`\`

${data.test}

\`\`\`

[Back To The Top](#${data.title.replace(" ","-")})

---

## Questions

If you have any questions about the app or the respository, you can create an issue or contact me at ${data.email}.
For more information of my projects you can visit: [${data.gitHub}](https://github.com/${data.github}/).

[Back To The Top](#${data.title.replace(" ","-")})

---


## Author Info

- ${data.authorName}.
- Twitter -- [@cesaguma](https://twitter.com/cesaguma)
- GitHub -- [${data.gitHub}](https://github.com/${data.gitHub})


[Back To The Top](#${data.title.replace(" ","-")}) 
`;
    return readmeContent;
}