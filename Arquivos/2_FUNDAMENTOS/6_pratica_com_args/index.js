//node .\index.js --nome=Fabio --idade=10

const minimist = require('minimist');

//externo
const args = minimist(process.argv.slice(2));

const soma = require('./soma').soma;

if(args.n1 != undefined && args.n2 != undefined){
    const a = parseInt(args.n1);
    const b = parseInt(args.n2);    
    soma(a, b);
}
else
{
    console.log('ajuda: node .\index.js --n1=2 --n2=2');
}