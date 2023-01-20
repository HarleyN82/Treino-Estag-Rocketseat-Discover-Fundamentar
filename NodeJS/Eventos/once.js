// Once
// Ouvindo eventos uma única vez

const {EventEmitter} = require('events')
const ev = new EventEmitter()

ev.once('once', (message) => console.log('Eu ouvi você uma única vez', message)) // ouvir os eventos e uma ação
ev.emit('once',"Sara") // emitindo um evento