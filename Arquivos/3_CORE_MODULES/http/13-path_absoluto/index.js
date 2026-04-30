const path = require('path');

const midFolder = 'relatorios';
const fileName = 'relatorio1.txt';
const finalPath = path.join(__dirname, 'arquivos', midFolder, fileName);




console.log('Caminho final:', finalPath);