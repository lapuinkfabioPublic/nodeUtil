const express = require('express');
const TaskController = require('../controllers/TaskController');

const router = express.Router();
router.get('/', TaskController.showTasks);
router.get('/add', TaskController.createTask);
router.post('/add', TaskController.createTaskSave);
router.get('/toggle/:id', TaskController.toggleTaskDone);
router.get('/delete/:id', TaskController.deleteTask);
router.get('/edit/:id', TaskController.editTask);
router.post('/edit/:id', TaskController.editTaskSave);
module.exports = router;
