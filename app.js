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

let officeNumber = {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?"
}

let school = {
    type: "input", 
    name: "school", 
    message: "What school do you attend?"
}

let GitHubUser = {
    type: "input", 
    name: "GitHubUser", 
    message: "What is your Github username?",
}

let repeated ={
    type: "checkbox", 
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
            obj = response 
            if  (obj.role == "manager"){ 
                    inquirer.prompt(officeNumber).then(function(response) {
                        obj.officeNumber = response.officeNumber
                        let person = new manager(obj.name,  obj.id, obj.email,   obj.officeNumber)
                        answers.manager.push(person)
                        repeat();
                    }) 
                } else if (obj.role == "intern"){
                    inquirer.prompt(school).then(function (response){
                        obj.school = response.school
                        let person = new intern(obj.name,   obj.id, obj.email, obj.school)
                        answers.intern.push(person)
                        repeat();
                    })
                } else if (obj.role == "engineer"){ 
                    inquirer.prompt(GitHubUser).then(function (response){
                        obj.GitHubUser = response.GitHubUser
                        let person = new engineer(obj.name, obj.id, obj.email, obj.GitHubUser)
                        answers.engineer.push(person)
                        repeat();
                    })
            } 
        }
    )};

    function repeat() {
        inquirer.prompt(repeated).then(function (response) {
            if (response.continue == "yes") {
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