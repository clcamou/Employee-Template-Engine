function managerTemplate (data){
    return`
    <div class="card">
    <div class="cardheader">
        <h2>${data.getName()}</h2>
        <h2><i class="fas fa-mug-hot"></i>Manager</h2>
    </div>

    <div class="cardbody">
        <table>
            <tr>
                <td>ID: ${data.getId()}</td>
            </tr>
            <tr>
                <td>Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></td>
            </tr>
            <tr>
                <td>Office Number: ${data.getOfficeNumber()}</td>
            </tr>
        </table>
    </div>
</div>`
}

module.exports = managerTemplate;