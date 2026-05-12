const Task = require('../models/Task');

module.exports = class TaskController {
    static async createTask(req, res) {
        res.render('tasks/create'); 
    }
}
