const readline = require("node:readline/promises").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Qual a sua linguagem preferida? ").then((linguagem) => {
    console.log(`Sua linguagem preferida é: ${linguagem}`);
    readline.close();
});