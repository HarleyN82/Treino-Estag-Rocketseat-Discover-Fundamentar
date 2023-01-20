// EventEmitter
// Emit = Emitir 
// Função estilo classe
// Primeiro se escuta (on) e depois você responde (emit)

const {EventEmitter} = require('events')
const ev = new EventEmitter()
const ev2 = new EventEmitter()

ev.on('saySomething', () => console.log('Eu ouvi você')) // ouvir os eventos e preparando uma ação
ev.emit('saySomething') // emitindo um evento

// Quando usamos dois parâmetros
// O primeiro parâmetro torna-se o termo de referênica 
// E o segundo parâmetro a menssagem a ser exposta

ev2.on('saySomething', (message) => console.log('Eu ouvi você', message))

ev2.emit('saySomething',"Samara")
ev2.emit('saySomething',"Jeff")
ev2.emit('saySomething',"Emma")