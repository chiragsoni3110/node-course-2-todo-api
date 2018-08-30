//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server')
    }
    console.log('Connected to Mongodb server')
    const db = client.db('TodoApp');

    //findOneAndUpdate
    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("5b8683ec4e55e54ff5a8b731")
    // }, {
    //         $set: {
    //             complete: false
    //         }
    //     }, {
    //         returnOrignal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5b8654951622af3fa8c96fef")
    }, {
            $set: {
                name: "chirag Soni"
            },
            $inc: {
                age: 1
            }
        }, {
            returnOrignal: false
        }).then((result) => {
            console.log(result);
        });

    //client.close();
});