/*Create a express server()
Create a route ("/") that sends the string "Hello World!"
Create a route ("public") that serves file from the public directory
*/

const Express = require("express");
const App = Express();
const port = 3001;

App.get('/', function(request, response) {
    response.send("Hello World!");
});

App.use('/public', Express.static("public"))

App.listen(port, function(){
    console.log("Server running!");
})