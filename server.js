const express = require("express");
const app = express();
const port = 5000;

let input = document.getElementsByClassName("input")[0].value;
let secondinp = document.getElementsByClassName("input1")[0].value;
let button = document.getElementById("button");

app.use(express.urlencoded({extended: true}));


const checkButton = (input === H || input === h) &&  (secondinp === U || secondinp === u);

   if (checkButton) {
    app.get ("/transparente", (req, res) => {
        res.render("transparente");
        });
    }else {
    console.log (err.message);
    res.render("index");

};