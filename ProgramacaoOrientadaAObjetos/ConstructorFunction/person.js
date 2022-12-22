// Função Construtora não inicializada

function Person(){
    this.name = "";
    this.age = 0;
}

// métodos especiais(acessores - get e modificadores - set)
// Definição de propriedades fora do construtor

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.setName = function(name){
    return this.name = name;
}

Person.prototype.getAge = function(){
    return this.age;
}

Person.prototype.setAge = function(age){
    return this.age = age;
}

// Instância - Objetos

let person = new Person();
person.setName("John");
person.setAge(22);

// Definição de propriedades para objetos construtores

person.gender = 'male';

person.getGender = function(){
    return this.gender;
}

console.log(person.getName()); // John
console.log(person.getAge()); // 22
console.log(person.gender); // male
console.log(person.getGender()); // male