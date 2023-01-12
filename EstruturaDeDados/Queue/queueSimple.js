// Passo 01: Modelando 

class Queue {

    constructor(){
        this.data = []
    }

    enqueue(value){
        this.data.push(value);
        console.log(`${value} chegou na fila!`)
    }

    dequeue(){
        const value = this.data.shift();
        console.log(`${value} saiu da fila!`)
    }
}

// Passo 02: Utilizando 
const myQueue = new Queue();

// Passo 03: Adicionar dados
myQueue.enqueue("Mariana");
myQueue.enqueue("Jefferson");
myQueue.enqueue("Júlia");

// Passo 04: Remover dados
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

