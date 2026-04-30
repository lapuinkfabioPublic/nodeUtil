const inquirer = require('inquirer').default;


inquirer.prompt([
    {
        type: 'input',
        name: 'p1',
        message: 'Qual a primeira nota?'
    }, 
    {
        type: 'input',
        name: 'p2',
        message: 'Qual a segunda nota?'
    }
]).then(answers => {   
    
    console.log(answers);
    const media = (parseFloat(answers.p1) + parseFloat(answers.p2)) / 2;
    console.log(`A média é: ${media}`);



}).catch(error => {
    console.error('Ocorreu um erro:', error);
});