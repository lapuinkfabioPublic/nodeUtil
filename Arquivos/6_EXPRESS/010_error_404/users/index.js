const express = require('express');
const router = express.Router();
const path = require('path');
const basePath = path.join(__dirname, '../templates');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/add', (req, res) => {
    res.sendFile(path.join(basePath, 'userform.html'));
});

router.post('/save', (req, res) => {
  
    console.log(req.body);
    const name = req.body.name;
    const age = req.body.age;
    console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`);
    res.sendFile(path.join(basePath, 'userform.html'));

});

module.exports = router;