const x = 10;

//checar se x é um numero

try {
    if(!Number.isInteger(x)){
        throw new Error('x não é um número');
    } 
    else{
        console.log('x é um número');
    }
} catch (error) {
    console.error('Ocorreu um erro:', error.message);
}   