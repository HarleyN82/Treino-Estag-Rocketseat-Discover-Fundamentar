// Passo 01: Modelando 

class Queue {

    constructor(size){
        this.data = [];
        this.size = size;
        this.top = -1;
    }

    isFull(){
        const isFull = this.size-1 === this.top;
        isFull ? "Fila cheia" : "Fila aberta"

        return isFull
    }

    isEmpty() {
        const isEmpty = this.top === -1;
        isEmpty ? "Fila vazia" : "Fila aberta"
        return isEmpty
    }

    enqueue(value){
        if(this.isFull()){
            console.log(`Ops! ${value} não poderá entrar. Fila cheia!`);
        } else{
            this.top++;
            this.data.push(value);
            console.log(`${value} chegou na fila!`)
        }
    }

    dequeue(){
        if(this.isEmpty()){
            console.log(`Ops! Não há o que tirar. Fila vazia!`);
        } else{
            this.top--
            const value = this.data.shift();
            console.log(`${value} saiu na fila!`)
        }
    }
}

// Passo 02: Utilizando 
const myQueue = new Queue(3);

// Passo 03: Adicionar dados
console.log(myQueue.isFull());
myQueue.enqueue("Mariana");
myQueue.enqueue("Jefferson");
myQueue.enqueue("Júlia");
myQueue.enqueue("Matheus");
console.log(myQueue.isFull());

// Passo 04: Remover dados
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.isEmpty());
myQueue.dequeue();