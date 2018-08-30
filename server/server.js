var express = require("express");
var bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");
const port = process.env.PORT || 3000;

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");



var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((docs) => {
        res.status(200).send(docs)
    }, (e) => {
        res.status(400).send(e)
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e);
    });
})

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {

        if (!todo) {
            return res.status(404).send();
        }
        res.send({ todo })

    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {

        if (!todo) {
            return res.status(404).send();
        }
        res.send({ todo })
    }).catch((e) => {
        res.status(400).send(e);
    });
});
app.listen(port, () => {
    console.log("started port 3000");
});


module.exports = { app };




// var newTodo = new Todo({
//     text: "Cook Dinner"
// });

// var otherTodo = new Todo({
//     text: "something to do",
//     // completed:true,
//     // completedAt:123
// });




// otherTodo.save().then((res) => {
//     console.log(JSON.stringify(res, undefined, 2))
// }, (e) => {
//     console.log("Unable to save todo", e);
// });


// //user 
// //email - require -trim -set type, -min length 1
// var publicUser = new User({
//     email: "chiragsoni.ahmedabad@gmail.com    "
// })

// publicUser.save().then((res) => {
//     console.log(JSON.stringify(res, undefined, 2))
// }, (e) => {
//     console.log("Unable to save user", e);
// });