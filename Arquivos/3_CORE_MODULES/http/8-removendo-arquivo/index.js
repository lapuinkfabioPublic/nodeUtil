//Fabio Leandro Lapuinka
const fs=require('fs');

fs.unlink('name.txt', (err) => {

    if (err) {
        console.error('Erro ao remover o arquivo:', err);   
        return;
    } else {
        console.log('Arquivo removido com sucesso!');
    }   
});