const fs = require('fs');
const filePath = 'name.txt';
const newFilePath = 'name-renamed.txt';

fs.rename(filePath, newFilePath, (err) => {  
    if (err) {

        console.error('Erro ao renomear o arquivo:', err);
        return;
    }   else {  
        console.log(`Arquivo renomeado ${newFilePath} com sucesso!`);

    }
}   );
