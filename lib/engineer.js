const employee = require("./employee")

class engineer extends employee {
    constructor(name, id, email, GitHubUser){
        super(name, id, email)
        this.GitHubUser = GitHubUser
    }
    getRole(){return "engineer"}
    getGitHubUser(){return this.GitHubUser}
}

module.exports = engineer