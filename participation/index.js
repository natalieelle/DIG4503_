import Express from 'express';
const App = Express();
const port = 3001;



App.get('/people/:id', (req, res) => {
    res.send("The user ID you have requested is " +  req.params.id);
});

App.listen(port, () => {

});

App.get('/people/:id', (req, res) => {
    res.json({userid:  req.params.id});
});

App.listen(port, () => {

});
