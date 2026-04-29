const fs = require('fs');

console.log('Início do programa');  

fs.writeFile('arquivo.txt', 'Olá, este é um arquivo síncrono!', function(err) {

    setTimeout(() => {
        console.log('Arquivo criado com sucesso!');
    }, 1000);

    if (err) {
        console.error('Erro ao criar o arquivo:', err)
        } else {
            console.log('Arquivo criado com sucesso!')
                
    }
})
;

console.log('Fim do programa!');

