// Extends with EventEmitter
// Como o processo de usar o inherits está em desuso uma outra alternativa para usar a herança seria da seguinte forma

const {EventEmitter} = require('events')

class Character extends EventEmitter {
    constructor(name){
        super()  // chamar as propriedades do EventEmitter
        this.name = name
    }
}

const chapolin = new Character('Chapolin');

chapolin.on('help', () => console.log(`Não temas! Eu sou o ${chapolin.name} colorado`))

console.log('Oh! E agora, quem poderá me defender?')

chapolin.emit('help')