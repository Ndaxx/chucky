const express = require("express");
const app = express();
const port = 5000;
app.set("view engine", "ejs");
app.use(express.static("public"))

app.use(express.urlencoded({extended: true}));
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/index", (req, res) => {

});

app.post("/check", (req,res) => {
    let h = req.body.h;
    let u = req.body.u;
    if(( h === "h"|| h === "H") && ( u === "u" || u === "U")) {
        res.render("transparente")
    } else {
        res.send("error");
    }
})
app.listen(port , () => console.log('> Server is up and running on port : ' + port));