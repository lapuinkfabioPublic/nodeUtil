const _ = require('lodash'); //como o Jquery $ o _ é o lodash, uma biblioteca de utilidades para JavaScript
const chalk = require('chalk'); //biblioteca para colorir o texto no terminal


const a = [1, 2, 3, 4, 5];
const b = [4, 5, 6, 7, 8];

const diff = _.difference(a, b); //diferença entre os arrays a e b
console.log(chalk.bgRed.bold(diff)); // [1, 2, 3] - elementos que estão em a mas não estão em b


