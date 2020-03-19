const http = require("http");

http.createServer(( req, res) => {

    res.writeHead(200, {
        "Content-Type" : "json"
    })

    let persona = {
        nombre: "yoel",
        apellido: "carcamo"
    }

    res.write(JSON.stringify(persona));
    res.end();

}).listen(8080)