const fs = require('fs');


fs.stat('arquivo.txt', (err, stats) => {
    if (err) {
        console.error('Erro ao obter detalhes do arquivo:', err);
        return;
    }   
    console.log('Detalhes do arquivo:');
    console.log(stats.isDirectory() ? 'É um diretório' : 'É um arquivo');
    console.log(stats.isBlockDevice() ? 'É um dispositivo de bloco' : 'Não é um dispositivo de bloco');
    console.log(stats.isCharacterDevice() ? 'É um dispositivo de caractere' : 'Não é um dispositivo de caractere');
    console.log(stats.isSymbolicLink() ? 'É um link simbólico' : 'Não é um link simbólico');
    console.log('Tamanho do arquivo:', stats.size, 'bytes');
    console.log('Data de criação:', stats.birthtime);
    console.log('Data da última modificação:', stats.mtime);
});
11_detalhes_arquivos copy