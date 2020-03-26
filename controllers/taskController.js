const taskModel = ("../models/taskModel.js");

const taskController = {
    getAll: function(req, res) {
        let tasks;
        tasks = taskModel.getAllTasks();
        res.status(200).json(tasks);
    },

    getById :function(req, res) {
        let task = taskModel.getTaskById(Number(req.params.id));
        res.status(200).json(task);
    },

    add: function(req, res) {
        let addedTask = taskModel.addTask(req.body);
        res.status(201).json(addedTask);
    },

    edit: function(req, res) {
        let editedTask = taskModel.editTask(
            Number(req.params.id),
            req.body
        );

        res.status(200).json(editedTask);
    },

    delete: function(req, res) {
        let deleteTask = taskModel.deleteTask(Number(req.params.id));
        res.status(200).json(deleteTask);
    }
};

module.exports = taskController;