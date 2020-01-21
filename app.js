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
    name: "name",
    message: "What is your name?",
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
}]

let officeNumber = {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?",
}

let school = {
    type: "input", 
    name: "school", 
    message: "What school do you attend?",
}

let gitHub = {
    type: "input", 
    name: "gitHub", 
    message: "What is your Github username?",
}

let repeated ={
    type: "checkbox", 
    name: "continue", 
    message: "Would you like to enter another teammate?",
    choices: ["yes", "no"]
}


function employees() {
    inquirer.prompt(questions).then(function(response)
        {
            data = response 
            if (data.role == "manager"){ 
                    inquirer.prompt(officeNumber).then(function(response) {
                        let person = new manager(data.name, data.id, data.email, data.officeNumber)
                        answers.manager.push(person)
                        repeat();
                    }) 
                } else if (data.role == "intern"){
                    inquirer.prompt(school).then(function (response){
                        let person = new intern(data.name, data.id, data.email, data.school)
                        answers.intern.push(person)
                        repeat();
                    })
                } else if (data.role == "engineer"){ 
                    inquirer.prompt(gitHub).then(function (response){
                        let person = new engineer(data.name, data.id, data.email, data.gitHub)
                        answers.intern.push(person)
                        repeat();
                    })
            } 
        }
    )};

    function repeat() {
        inquirer.prompt(repeated).then(function (data) {
            if (data.yes) {
                employees();
            } else {
                html(answers);
            }
        })
    }

    function html(answers) {
        let cards = ""
        answers.manager.forEach(element => {
            cards += managerTemplate(element)
        });
        answers.engineer.forEach(element => {
            cards += engineerTemplate(element)
        });
        answers.intern.forEach(element => {
            cards += internTemplate(element)
        });
        fs.writeFile("./output/team.html", html(cards), function (err) {
            if (err) {
                return console.log(err);
            } else {
                console.log ("You did it!")
            }
        });
    }

    employees();