const express = require('express');
const exphbs = require('express-handlebars');
const app = express();


const Task = require('./models/Task');
const TaskController = require('./controllers/TaskController');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
const conn = require('./db/conn');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
}); 

app.get('/tasks', TaskController.showTasks);

app.get('/tasks/create', (req, res) => {
    res.render('tasks/create');
});


conn.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((err) => {
    console.log('Error syncing database:', err);
});
