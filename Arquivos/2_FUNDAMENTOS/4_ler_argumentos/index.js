console.log(process.argv);

const args = process.argv.slice(2);

console.log('Argumentos passados:', args);

const nome = args[0].split('=')[1];

const idade = args[1].split('=')[1];
console.log(`Olá, ${nome}! Bem-vindo ao Node.js!`);


console.log(nome);
console.log(idade);


console.log(`Olá, ${nome}! Você tem ${idade} anos.`);