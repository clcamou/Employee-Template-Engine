const employee = require("./employee");

class engineer extends employee{
    constructor(name, id, email, GitHubUser){
        super(name, id, email)
        this.GitHubUser = GitHubUser
    }
    getRole(){return "engineer"}
    getGitHub(){return this.GitHubUser}
}

module.exports = engineer