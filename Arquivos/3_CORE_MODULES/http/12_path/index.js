const path = require('path');   
const customPath = path.join(__dirname, 'subpasta', 'arquivo.txt');

console.log('Caminho personalizado:', customPath);

const absolutePath = path.resolve('arquivo.txt');
console.log('Caminho absoluto:', absolutePath);


console.log(path.dirname(customPath));
console.log(path.basename(customPath));
console.log(path.extname(customPath));
