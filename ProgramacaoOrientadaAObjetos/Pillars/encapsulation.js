/*
    Encapsulamento
        - O encapsulamento serve para proteção de dados e sua padronização de uso.
        - Colocar numa cápsula
        - Agrupamento de funções e variáveis
        - Esconder etalhes de implementação
        - Camada de segurança para os atributos e métodos

    Ideia básica: Dirigir carro vs Conhecer o motor do carro
*/

// Código Estrutural

let height = 50;
let width = 60;

function calculeArea(){
    return height * width;
}

let area = calculeArea();

// Orientado a Objetos

class Poligon {
    constructor(height,weight){
        this.height = height;
        this.weight = weight;
    }

    get area(){
        return this.#calculeArea();  // #(privado) - visto apenas na classe pai
    }

    #calculeArea(){
        return this.height * this.weight
    }
}

// Criar o objeto

let poligon = new Poligon(50,60);
console.log(poligon.area);
// console.log(poligon.#calculeArea()); // Já mostra erro, porque o usuário não tem acesso