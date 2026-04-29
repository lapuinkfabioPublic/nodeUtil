const readline = require("node:readline/promises").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Qual a sua linguagem preferida? ").then((linguagem) => {

    if(linguagem.toLowerCase() === 'javascript'){
        console.log('Ótima escolha! JavaScript é uma linguagem muito popular e versátil.');
    }
    else if(linguagem.toLowerCase() === 'python'){
        console.log('Python é uma excelente linguagem para iniciantes e tem uma sintaxe muito clara.');
    }
    else if(linguagem.toLowerCase() === 'java'){
        console.log('Java é uma linguagem robusta e amplamente utilizada em desenvolvimento de aplicativos empresariais.');
    }
    else{
        console.log('Linguagem não reconhecida.');
    }
    console.log(`Sua linguagem preferida é: ${linguagem}`);
    readline.close();
});

