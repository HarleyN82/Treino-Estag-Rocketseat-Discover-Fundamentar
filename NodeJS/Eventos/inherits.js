// Inherits
// Herdando do EventEmitter
// Essa função vai herdar as funcionalidades do EventEmitter para outra função
// Está em desuso - Uma outra alternativa seria com POO clásico

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