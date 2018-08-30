const { ObjectID } = require("mongodb");

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id = 'b879786495a3e354401cb04ll';

if (!ObjectID.isValid()) {
    console.log("ID is not valid")
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("todos", todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("todo", todo)
// });


Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log("ID is not found")
    }
    console.log("todo by id", todo)
}).catch((e) => {
    console.log(e)
    console.log('============================================')
});

module.exports = {mongQ}