const express = require('express');
const TaskController = require('../controllers/TaskController');

const router = express.Router();
router.get('/', TaskController.showTasks);
router.get('/add', TaskController.createTask);
router.post('/add', TaskController.createTaskSave);
module.exports = router;
