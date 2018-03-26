var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var toDoSchema = new Schema({
    name: String,
    task: String,
    isDone: Boolean,
    deadline: String,
});

var toDos = mongoose.model('toDos', toDoSchema, "toDos");
module.exports = toDos;