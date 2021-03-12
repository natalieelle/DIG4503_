import Express from 'express';
const App = Express();
const port = 45030;

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.get('/people/:person', (req, res) => {
    res.json({name: "name"});
});
//name not found
App.listen(port, () => {

});

App.get('/search/:name', (req, res) => {
    res.json({search: [names]});
});
//"search/y" => "Cortney"
App.listen(port, () => {
//"search not found"
});