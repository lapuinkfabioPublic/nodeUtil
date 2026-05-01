
//modulos externos

import chalk from 'chalk';
import inquirer from 'inquirer';
import readline from 'readline';
import fs from 'fs';


operation();


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

       const fileJson = 'accounts/' + accountName + '.json';

        if(!fs.existsSync('accounts')){      
              fs.mkdirSync('accounts');

        }

        if(fs.existsSync(fileJson)){      
           
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

        fs.writeFileSync(fileJson, '{"balance": 0}', function(err){
            if(err){
                console.log(chalk.red('Erro ao criar conta!'), err);
                operation();    
                return ;
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
    
    inquirer.prompt([
    {
        name: 'accountName',
        message: 'Digite o nome da conta:'
    }
    ]).then((answers) => {    const accountName = answers['accountName'];

        const fileJson = 'accounts/' + accountName + '.json';
        if(!checkAccountExists(accountName)){
            return;
        }

        const accountData = JSON.parse(fs.readFileSync(fileJson, 'utf-8'));
        console.log(chalk.green(`Saldo atual: R$ ${accountData.balance}`));
        inquirer.prompt([     { 
            name: 'amount',
            message: 'Digite o valor a ser depositado:'
        }]).then((answers) => {    const amount = parseFloat(answers['amount']);        

            if(isNaN(amount) || amount <= 0){
                console.log(chalk.red('Valor inválido!'));
                operation();
                return;
            }   
            accountData.balance += amount;
            fs.writeFileSync(fileJson, JSON.stringify(accountData), function(err){
                if(err){
                    console.log(chalk.red('Erro ao depositar!'), err);
                    operation();    
                    return ;
                }       
                console.log(chalk.green(`Depósito de R$ ${amount} realizado com sucesso! Novo saldo: R$ ${accountData.balance}`));
                operation();    
            });
        }).catch((err) => {    console.log(chalk.red('Erro ao depositar!'), err);
            operation();    
        });
    }).catch((err) => {    console.log(chalk.red('Erro ao consultar conta!'), err);
        operation();    
    });     



    console.log(chalk.green('Depositando...'));
     operation();
     return;
    // Lógica para depositar
}
function withdraw(){
    console.log(chalk.green('Sacando...'));
    // Lógica para sacar
}   
function checkAccountExists(accountName){
    const fileJson = 'accounts/' + accountName + '.json';
    if(!fs.existsSync(fileJson)){
        
        operation();
        return false;
    }
    return true;
}

