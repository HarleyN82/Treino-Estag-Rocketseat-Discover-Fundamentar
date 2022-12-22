// Definir
class Screw { // Superclasse - Abstrata

    // parafuso
    constructor(){
        if(this.constructor === Screw){
            throw new Error('Cannot construct Screw instances directly'); // Classe abstrata não pode ser instânciada
        }
    }

    get type(){
       throw new Error('Method get type need implementation'); // Método 'get tipo()' precisa ser implementado
    }
}

class Split extends Screw{
    constructor(){
        super();
    }

    get type(){
        return 'split' // fenda
    }
}

class Philips extends Screw{
    constructor(){
        super();
    }

    get type(){
        return 'philips'
    }
}

class Allen extends Screw {}

// criar e usar

new Screw() // 'Classe abstrata não pode ser instânciada'

let split = new Split();
let philips = new Philips();
let allen = new Allen();

console.log(split.type, philips.type);
console.log(allen.type) // '// Método 'get tipo()' precisa ser implementado'

// Nesse exemplo, só existe parafuso se ele for de algum tipo específico como: Fenda, Philips ou Allen.