const express = require('express');
const TaskController = require('../controllers/TaskController');

const router = express.Router();
router.get('/', TaskController.showTasks);
router.get('/add', TaskController.createTask); 
module.exports = router;
