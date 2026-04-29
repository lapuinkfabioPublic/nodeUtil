const chalk = require('chalk').default

const nota = 2;

if(nota>=7){
    console.log(chalk.green('Aprovado'));
}
else
{
    console.log(chalk.bgRed.black('Você precisa fazer a prova de recuperação'));
}

