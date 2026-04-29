//node .\index.js --nome=Fabio --idade=10

const minimist = require('minimist');
const args = minimist(process.argv.slice(2));



const nome = args.nome;
const idade = args.idade;   

if(nome==undefined || idade==undefined){
    console.log(args);
    console.log('Ajuda: Exemplo: node .\index.js --nome=Fabio --idade=10');
    process.exit(1);
}

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
