// Vamos vê o que tem dentro do Módulo Event
const events = require('events')
console.log(events)

// EventEmitter
// Emit = Emitir 
// Função estilo classe

const {EventEmitter} = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (message) => console.log('Eu ouvi você', message)) // ouvir os eventos e uma ação

ev.emit('saySomething',"Samara") // emitindo um evento
ev.emit('saySomething',"Jeff")
ev.emit('saySomething',"Emma")

// saySomething - Quando é o primeiro arg se torna o nome de referência
//ev.emit('saySomething')

/*  Outra forma
ev.emit('saySomething')
ev.on('saySomething', () => console.log('Eu ouvi você'))
*/

// Ouvindo eventos uma única vez

ev.once('once', (message) => console.log('Eu ouvi você uma única vez', message)) // ouvir os eventos e uma ação

ev.emit('once',"Sara") // emitindo um evento


// Herdando do EventEmitter
// Essa função vai herdar as funcionalidades do EventEmitter para outra função

const {inherits} = require('util')

function Character(name){
    this.name = name
}

inherits(Character,EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Não temas! Eu sou o ${chapolin.name} colorado`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')

/* 
class Character {
    constructor(name){
        this.name = name;
    }
}
*/