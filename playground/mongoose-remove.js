const { ObjectID } = require("mongodb");

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findOneAndRemove({ _id: '5b87dc6d58d90682a87503ba' }).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5b87dc6d58d90682a87503ba').then((todo) => {
    console.log(todo);
});