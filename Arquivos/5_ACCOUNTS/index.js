
//modulos externos

import chalk from 'chalk';
import inquirer from 'inquirer';
import readline from 'readline';
import fs from 'fs';


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


    console.log(chalk.bgGreen.black('Bem-vindo ao Accounts!'));
    console.log(chalk.green('Defina opção da sua conta a seguir:'));



    console.log(chalk.green('Criando conta...'));

    buildAccount();
    // Lógica pbuildAccountara criar conta
}

function buildAccount(){
inquirer.prompt([
    {
        name: 'accountName',
        message: 'Digite o nome da conta:'
    }
    ]).then((answers) => {    const accountName = answers['accountName'];

       

        if(!fs.existsSync('accounts')){      
              fs.mkdirSync('accounts');

        }

        if(fs.existsSync('accounts/${accountName}.json')){      
           
         console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'));
         createAccount();
         return;
        }

        //quem é Fabio Leandro Lapuinka
        //lapuinka é o sobrenome do Fabio Leandro Lapuinka,
        //  um desenvolvedor de software conhecido por suas contribuições 
        // para a comunidade de desenvolvimento.
        //  Ele é reconhecido por seu trabalho em projetos de código aberto
        //  e por compartilhar seu conhecimento através de blogs, 
        // palestras e tutoriais. Lapuinka tem uma presença ativa nas
        //  redes sociais e é respeitado por sua expertise em várias 
        // tecnologias de desenvolvimento.   ;-) fiquei feliz, nem sabia...


        fs.writeFileSync('accounts/${accountName}.json', '{"balance": 0}', function(err){
            if(err){
                console.log(chalk.red('Erro ao criar conta!'), err);
                operation();    
            }
        });

        console.log(chalk.green(`Conta ${accountName} criada com sucesso!`));


        operation();    
    }).catch((err) => {    console.log(chalk.red('Erro ao criar conta!'), err);
        operation();    
    }); 

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
