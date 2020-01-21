function mainTemplate(data){

    return    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/6bc802c1b6.js" crossorigin="anonymous"></script>
        <style>
            * {
                padding: 0;
                margin: 0;
            }
            body {
                min-height: 100vh;
                font-family: 'Roboto', sans-serif;
            }
            header {
                height: 15vh;
                text-align: center;
                background-color: #e84855;
                color: white;
                padding: 0;
                margin: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .conatainer {
                width: 100%;
                padding: 0;
                margin: 0;
                margin-top: 10%;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                flex-direction: row;
            }
    
            .card {
                display: flex;
                flex-direction: column;
                margin:20px;
                margin-left: 5vw;
                margin-right: 5vw;
                box-shadow: 5px 5px 5px gray;
                border-radius: 15px;
                
            }
    
            .cardheader {
                background-color: #0077f7;
                color: white;
                border-radius: 15px 15px 0px 0px;
    
            }
    
            h2 {
                padding: 10px;
            }
    
            .cardbody {
                background-color: #f6f7f8;
                border-radius: 0px 0px 15px 15px;
    
            }
    
            table {
                padding: 0px;
                margin: 0px;
                margin: 30px 15px 30px 15px;
                background-color: white;
                border-collapse: collapse;
                border-radius: 10px;
            }
    
            td {
    
                padding: 10px;
                margin: 0px;
                border: 1px solid #dfdfdf;
            }
        </style>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <div class="conatainer">
            ${data}
        </div>
    
    </body>
    
    </html>`
    }
    module.exports = mainTemplate;