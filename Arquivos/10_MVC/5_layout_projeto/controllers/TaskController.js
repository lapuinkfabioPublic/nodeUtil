const Task = require('../models/Task');

module.exports = class TaskController {
    static async showTasks(req, res) {
        const tasks = await Task.findAll({raw: true});
        res.render('tasks/all', {tasks});
    }

    static async createTask(req, res) {
        res.render('tasks/create'); 
    }
}
