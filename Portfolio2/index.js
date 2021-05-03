import Express from "express";
import fs from "fs";

const App = Express();
const port = 3010;

let fileContents = fs.readFileSync("database.json");

let database = JSON.parse(fileContents);

App.get("", (req, res) => {
    let result = {"error": "Not available!"};

    database.forEach((value) => {
        if(req.params.score == value.score)
    })
})
