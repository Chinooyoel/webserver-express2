const express = require("express");
const app = express();
const hbs = require("hbs");

const port = process.env.PORT || 3000;

require("./hbs/helpers")

app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + "/views/parciales");






app.use( express.static( __dirname + "/public") );

app.get("/", ( req, res) => {

    res.render("home.hbs", {
        nombre : "Yoel",
    });
})

app.get("/about", ( req, res ) => {

    res.render("about.hbs")

})

app.listen(port, () => {
    console.log(`Escuchando peticiones del puerto ${port}`)
});