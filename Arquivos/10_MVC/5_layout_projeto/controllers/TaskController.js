const Task = require('../models/Task');

module.exports = class TaskController {
    static async showTasks(req, res) {
        const tasks = await Task.findAll({raw: true});
        res.render('tasks/all', {tasks});
    }

    static async createTaskSave(req, res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        };
        await Task.create(task);
        res.redirect('/tasks');
    }   
    
    static async createTask(req, res) {
        res.render('tasks/create'); 
    }

    static async toggleTaskDone(req, res) {
        const id = req.params.id;
        const task = await Task.findByPk(id);   
        if (task) {
            task.done = !task.done;
            await task.save();
        }

        res.redirect('/tasks');
    }

    static async deleteTask(req, res) {
        const id = req.params.id;
        await Task.destroy({ where: { id } });
        res.redirect('/tasks');
    }

    static async editTask(req, res) {
        const id = req.params.id;
        const task = await Task.findByPk(id, { raw: true });

        if (task) {
            res.render('tasks/edit', { task });
        }   
    }

    static async editTaskSave(req, res) {
        const id = req.body.id;
        const task = {
            title: req.body.title,
            description: req.body.description
        };      
        await Task.update(task, { where: { id } });
        res.redirect('/tasks');
    }
}
