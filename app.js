// create variables needed for app and install packages 
const inquirer = require("inquirer");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const employee = require("./lib/employee");

const managerTemplate = require("./templates/managerTemplate");

const engineerTemplate = require("./templates/engineerTemplate");

const internTemplate = require("./templates/internTemplate");

const mainTemplate = require("./templates/mainTemplate");

const fs = require("fs");


//test package
const jest = require('jest');

//create answers 
let answers = {
    manager: [],
    engineer: [],
    intern: [],
}

let questions = [{
    type: "input",
    message: "What is your name?",
    name: "name",
}, {
    type: "list", 
    name: "role",
    message: "What role do you play in the company?",
    choices: ["manager", "engineer","intern"], 
}, {
    type: "input", 
    name: "email",
    message: "What is your email?",
}, {
    type: "input", 
    name: "id",
    message: "What is your id?",
}, {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?"
}, {
    type: "checkbox", 
    name: "continue", 
    message: "Would you like to enter another teammate?",
    choices: ["yes", "no"]
}
]

function promptUser() {
    inquirer.prompt(questions).then(function (response)
        {
            let path = role;
            switch(path){
                case "manager": 
                case "intern" :
                case "engineer": 
                    return renderHTML(path + ".html", res);
                default:
                    return renderHTML("main.html");
            } 
        }
    )}