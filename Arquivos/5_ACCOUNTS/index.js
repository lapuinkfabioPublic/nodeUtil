
//modulos externos

import chalk from 'chalk';
import readline from 'readline';



function operation(){
    console.log(chalk.blue('Opções disponíveis:'));
    console.log('1. Criar conta');
    console.log('2. Consultar saldo');
    console.log('3. Depositar');
    console.log('4. Sacar');
    console.log('5. Sair');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Escolha uma opção (1-5): ', (answer) => {
        rl.close();
        switch(answer.trim()) {
            case '1':
                createAccount();
                break;
            case '2':
                getAccountBalance();
                break;
            case '3':
                deposit();
                break;
            case '4':
                withdraw();
                break;
            case '5':
                console.log(chalk.green('Obrigado por usar o Accounts!'));
                process.exit();
                break;
            default:
                console.log(chalk.red('Opção inválida!'));
                operation();
        }
    });   

}


operation();

function createAccount(){
    console.log(chalk.green('Criando conta...'));
    // Lógica para criar conta
}
function getAccountBalance(){   
    console.log(chalk.green('Consultando saldo...'));
    // Lógica para consultar saldo
}
function deposit(){
    console.log(chalk.green('Depositando...'));
    // Lógica para depositar
}
function withdraw(){
    console.log(chalk.green('Sacando...'));
    // Lógica para sacar
}   
