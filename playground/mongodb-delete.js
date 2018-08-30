//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server')
    }
    console.log('Connected to Mongodb server')
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection("Todos").deleteMany({
    //     text: "lunch"
    // }
    // ).then((result) => {
    //     console.log(result)
    // })
    
    
    //deleteOne
    // db.collection("Todos").deleteOne({text:"lunch"}).then((result)=>{
    //     console.log(result)
    // })

    //findOneAndDelete

    db.collection("Todos").findOneAndDelete({text:"lunch"}).then((result)=>{
        console.log(result)
    })
    // client.close();
});