
//engineer template called to create the card pinned to the html 
function engineerTemplate (data){
    return`<div class="card">
    <div class="cardheader">
        <h2>${data.getName()}</h2>
        <h2><i class="fas fa-glasses"></i>Engineer</h2>
    </div>
    <div class="cardbody">
        <table>
            <tr>
                <td>ID: ${data.getId()}</td>
            </tr>
            <tr>
                <td>Email: ${data.getEmail()}</td>
            </tr>
            <tr>
                <td>Github: ${data.getGithubUser()}</td>
            </tr>
        </table>
    </div>
</div>`}
module.exports = engineerTemplate;