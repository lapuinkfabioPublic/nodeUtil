const fs = require('fs');


fs.stat('arquivo.txt', (err, stats) => {
    if (err) {
        console.error('Erro ao obter detalhes do arquivo:', err);
        return;
    }   
    console.log('Tamanho do arquivo:', stats.size, 'bytes');
    console.log('Data de criação:', stats.birthtime);
    console.log('Data da última modificação:', stats.mtime);
});
