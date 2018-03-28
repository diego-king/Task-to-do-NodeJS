const util = require('util');
var toDoModel = require('../models/toDoModel');
var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.get('/findToDos/:name', function(req, res) {
    toDoModel.find({name: req.params.name}, function(err, toDos) {
        if (err) {
            res.send('fail');
            console.error(err.message);
        } else {
            res.send(toDos);
        }
    });
});

router.get('/findToDo/:id', function(req, res) {
    toDoModel.findById({_id: req.params.id}, function(err, toDo) {
        if (err) {
            res.send('fail');
            console.error(err.message);
        } else {
            res.send(toDo);
        }
    });
});

router.post('/todo', function(req, res) {
    var newToDo = toDoModel({
        name: req.body.name,
        task: req.body.task,
        isDone: req.body.isDone,
        deadline: req.body.deadline,
    });

    newToDo.save(function(err) {
        if (err) {
            res.send('fail');
            console.error(err.message);
        } else {
            res.send('OK');
        }
    });
});

router.put('/todo', function(req, res) {
    toDoModel.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        task: req.body.task,
        isDone: req.body.isDone,
        deadline: req.body.deadline,
    }, function(err, toDo) {
        if (err) {
            res.send('fail');
            console.error(err.message);
        } else {
            res.send('OK');
        }
    });
});

router.delete('/todo/:id', function(req, res) {
    toDoModel.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.send('fail');
            console.error(err.message);
        } else {
            res.send('OK');
        }
    });
});

router.get('/names', function(req, res) {
    toDoModel.find({}).distinct('name', function(err, toDos) {
        if (err) {
            res.send('fail');
            console.error(err.message);
        } else {
            res.send(toDos);
        }
    });
});

module.exports = router;