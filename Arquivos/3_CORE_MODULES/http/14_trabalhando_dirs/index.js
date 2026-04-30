const fs = require('fs');
if( !fs.existsSync('arquivos') ){
    fs.mkdirSync('arquivos');
    console.log('Diretório "arquivos" criado com sucesso!');
}
else{
    console.log('O diretório "arquivos" já existe.');
    if( !fs.existsSync('arquivos/relatorios') ){
        fs.mkdirSync('arquivos/relatorios');
        console.log('Diretório "relatorios" criado com sucesso dentro de "arquivos"!');
    }
    else{
        console.log('O diretório "relatorios" já existe dentro de "arquivos".');
    }
}   