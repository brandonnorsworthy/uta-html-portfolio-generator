const inquirer = require("inquirer");
const fs = require("fs");
// const htmljs = require("./html.js")

let questions = [
    {
        //name,
        type: "input",
        message: "enter your name",
        name: "name"
    },
    {
        //location,
        type: "input",
        message: "enter your location",
        name: "location"
    },
    {
        //bio,
        type: "input",
        message: "enter a bio",
        name: "bio"
    },
    {
        //LinkedIn URL,
        type: "input",
        message: "enter your linkedin url",
        name: "linkedin"
    },
    {
        //and GitHub URL
        type: "input",
        message: "enter your github url",
        name: "github"
    }
]

function writeFile(filename, response) {
    fs.writeFile(filename, createHtml(response), err => {
        err ? console.log('fail') : console.log('success')
    })
}

function init() {
    inquirer.prompt(questions)
    .then(function(response){
        writeFile("portfolio.html", response)
    });
}

function createHtml(response) {
    htmlStr = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Generated Portfolio</title>
    </head>
    <body>
        <h1>Name: ${response.name}</h1>
        <h1>Location: ${response.location}</h1>
        <h1>${response.bio}</h1>
        <a href="${response.linkedin}">click for linked in</a>
        <a href="${response.github}">click for my github</a>
    </body>
    </html>`;

    return htmlStr;
}

init()