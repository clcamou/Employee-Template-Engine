// create variables needed for app and install packages 
const inquirer = require("inquirer");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

//to call on the templates 
const managerTemplate = require("./templates/managerTemplate");
const engineerTemplate = require("./templates/engineerTemplate");
const internTemplate = require("./templates/internTemplate");
const mainTemplate = require("./templates/mainTemplate");

// to call on the file system
const fs = require("fs")

//Create questions to be asked
let questions = [{
    type: "input",
    name: "name",
    message: "What is your name?"
}, {
    type: "list", 
    name: "role",
    message: "What role do you play in the company?",
    choices: ["manager", "engineer","intern"] 
}, {
    type: "input", 
    name: "email",
    message: "What is your email?"
}, {
    type: "input", 
    name: "id",
    message: "What is your id?"
}]

//question for manager
let officeNumber = {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?"
}
//question for intern
let school = {
    type: "input", 
    name: "school", 
    message: "What school do you attend?"
}
//question for engineer
let GitHubUser = {
    type: "input", 
    name: "GitHubUser", 
    message: "What is your Github username?",
}

//repeat the questions until all members are added
let repeated ={
    type: "list", 
    name: "continue", 
    message: "Would you like to enter another teammate?",
    choices: ["yes", "no"],
}

//create answers object 
let answers = {
    manager: [],
    engineer: [],
    intern: []
}


//prompt user to collect information from the user 
function employees() {
    inquirer.prompt(questions).then(function(response)
        {
            //if the user selects manager 
            teammate = response 
            if  (teammate.role == "manager"){ 
                    inquirer.prompt(officeNumber).then(function(response) {
                        teammate.officeNumber = response.officeNumber
                        let person = new manager(teammate.name,  teammate.id, teammate.email,   teammate.officeNumber)
                        answers.manager.push(person)
                        repeat();
                    }) //if the user selects intern
                } else if (teammate.role == "intern"){
                    inquirer.prompt(school).then(function (response){
                        teammate.school = response.school
                        let person = new intern(teammate.name,   teammate.id, teammate.email, teammate.school)
                        answers.intern.push(person)
                        repeat();
                    })//if the user selects engineer 
                } else if (teammate.role == "engineer"){ 
                    inquirer.prompt(GitHubUser).then(function (response){
                        teammate.GitHubUser = response.GitHubUser
                        let person = new engineer(teammate.name, teammate.id, teammate.email, teammate.GitHubUser)
                        answers.engineer.push(person)
                        repeat();
                    })
            } 
        }
    )};
//repeats the questions for each new teammate until the person selects no
    function repeat() {
        inquirer.prompt(repeated).then(function (response) {
            if (response.continue == "yes") {
                employees();
            } else {
                html(answers);
            }
        })
    }
//creates the cards with the answers to append to the html page
    function html(answers) {
        let cards = ""
        answers.manager.forEach(element => {
            cards += managerTemplate(element)
        });
        answers.intern.forEach(element => {
            cards += internTemplate(element)
        });
        answers.engineer.forEach(element => {
            cards += engineerTemplate(element)
        });
        fs.writeFile("./output/index.html", mainTemplate(cards), function (err) {
            if (err) {
                return console.log(err);
            } else {
                console.log ("You did it!")
            }
        });
    }

    employees();