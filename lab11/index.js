import MongoClient from "mongodb";
const URL ="mongodb+srv://nlaurent:E8LotEpTIQb0cH1K@cluster0.oewwc.mongodb.net/test"

MongoClient.connect(URL, {useUnifiedTopology: true})
.then(connection => {
    let database = connection.db("sample_airbnb");

    let collection = database.collection("listingsAndReviews");
    
    //let cursor = collection.find({review_scores: {$gte: "99"}, beds: {$gte: "5"}, price: {$lte: "200"}});

    let cursor = collection.find({review_scores: {$gte: "99"}, beds: {$gte: "5"}, price: {$lte: "200"}});

    cursor.forEach(document => {
        console.log(document.name);
    }, () => {
        connection.close();
    })
})
.catch(error => {
    console.log("Error: " + error);
})

/*
With a review score rating greater than or equal to 99
With greater than or equal to 5 beds
With a price less than or equal to 200
*/