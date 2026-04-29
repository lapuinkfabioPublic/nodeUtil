const fs = require('fs');

const a = 10;
const b = 20;

console.log(`A soma de ${a} e ${b} é:`, a + b);

/*
    Leitura de um arquivo do Sistema Operacional
 */
function lerArquivo(arquivo) {
    fs.readFile(arquivo, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }   
        console.log('Conteúdo do arquivo:', data);
    });
}


//lerArquivo('arquivo.txt');