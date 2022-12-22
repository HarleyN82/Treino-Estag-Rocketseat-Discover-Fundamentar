/* 
    Herança
        - Pais e Filhos
        - Objetos podem herdar, ou estender, características bases
        - Uma cópia de atributos e métodos de outra classe

    - Um objeto pode estender de outro objeto que pode estender de outro objeto
    - Fácil reutilização de código
    
*/

class Vehicle {
    wheels = 4;

    move(direction){}
    turn(direction){}
}

class Motorbike extends Vehicle {
    constructor(wheels) {
        super(); // puxar os atributos e métodos do pai
        this.wheels = 2;
    }
}