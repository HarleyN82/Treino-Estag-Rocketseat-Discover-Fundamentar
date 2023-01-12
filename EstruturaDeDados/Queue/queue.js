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

    front(){
        return console.log("O primeito item da fila é " + this.data[0]);
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

    display(){
        if(this.isEmpty()){
            console.log(`Ops! Não há nada aqui. Fila vazia!`);
        } else{
            console.log(`Minha fila: ${this.data}`)
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

// Passo 04: Todos os itens 
myQueue.display();

// Passo 05: Primeiro item da fila
myQueue.front();

// Passo 06: Remover dados
myQueue.dequeue();
myQueue.dequeue();
myQueue.front();
myQueue.dequeue();
console.log(myQueue.isEmpty());
myQueue.dequeue();