import Express from "express";
import fs from "fs";
const App = Express();
const port = 3010;

let fileContents = fs.readFileSync("database.json");

let database = JSON.parse(fileContents);

App.get("employees/:name", (req, res) => {
    let result = { error: "not found"};

    database.forEach((value) => {
        if(req.params.name == value.name) {
        result = value;

    } else {
        res.json({name: "name", age: "#"});
    }
});
res.json(result);
})


App.listen(port, () => {
    console.log.log("Server running!");
})