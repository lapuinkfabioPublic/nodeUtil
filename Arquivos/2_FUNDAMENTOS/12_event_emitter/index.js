const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('start', (name) => {
    console.log(`Olá, ${name}! Bem-vindo ao mundo dos eventos!`);
});

console.log('Antes');
emitter.emit('start', 'Fabio'); 
console.log('Depois');

