// Passo 01: Modelando 

class Stack {

    constructor(size){
        this.data = new Array(size); // Para definir o tamanho do array
        this.size = size;
        this.top = -1;
    }

    isFull(){
        return this.size-1 === this.top;
    }

    isEmpty() {
        return this.top === -1;
    }

    push(value){
        if (this.isFull()) {
            return console.log(`Ops! ${value} não pode entrar. Pilha cheia!`);
        } else{
            this.top++
            this.data[this.top] = value; // Na posição base irá receber o valor
            console.log(`${value} chegou na pilha`);
            return this.data
        }
    }

    pop(){
        if(this.isEmpty()) {
            return "A pilha está vazia"
        } else {
            this.top--
           const del = this.data.pop();
           console.log(`${del} saiu da pilha!`)
        }
    }

    /*
        pop(){
            if(this.top < 0) return undefined
            const poppedTop = this.data[this.top]
            delete this.data[this.top]
            this.top--
            console.log("Foi retirado o topo da pilha: " + poppedTop)
            return poppedTop
        }
    */

    peek(){
        if(this.isEmpty()) {
            return "A pilha está vazia"
        } else {
            return this.top >= 0 ? `Topo: ${this.data[this.top]}` : undefined
        }
    }

    displayAll(){

        if(this.isEmpty()) {
            console.log("A pilha está vazia")
            return 
        } else{
            return console.log("Minha Pilha:", this.data.toString())
        }
    }
}

// Passo 02: Utilizando 
const myStack = new Stack(3);

// Passo 03: Adicionar dados
myStack.push('arroz')
myStack.push('feijao')
console.log(myStack.push('sucrilho'))

console.log(myStack.peek())

// Passo 04: Remover dados
myStack.pop()

myStack.push('macarrao')
myStack.push('coca-cola')

// Passo 05: Tamanho da Pilha
console.log("Tamanho da Pilha: " + myStack.size)

// Passo 06: Exibindo a Pilha
myStack.displayAll()