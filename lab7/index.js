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
//Create a GET route called people/:person  where person is a route parameter.
//Should return a JSON object with the property, {name: "name"}, for exact matches of a name found in the array names.
App.get('/people/:person', (req, res) => {
    let name = req.params.person;
    if (people.includes(name)){
        res.json({ Name: "name"});
    } else {
        res.json({ Name: "Not found"});
    } //If the name is not found, the route should respond with a JSON object, {name: "not found"}
});
//Create a GET route called search/:name  where name  is a route parameter.
App.get('/search/:name', (req, res) => {
    const names = people.filter(str => str.includes(req.params.name));

    if (names != 0) {
        res.json({ search: names});
    } else {
        res.json({search: "Not found" });
    }
});

//"search/y" => "Cortney" 
App.listen(port, () => {
//"search not found"
});

/*

 


Should return a JSON object, {search: [names]}, based on if the route parameter can be found in the string of the name. For example, using "search/y" would find ["Cortney"], but "search/e" would find multiple entries, all of which should be returned as part of an array. 
If search cannot be found, the route should respond with a JSON object, {search: "not found"}

*/ 