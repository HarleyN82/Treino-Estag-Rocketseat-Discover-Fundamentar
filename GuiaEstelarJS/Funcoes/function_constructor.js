/* function constructor

Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado. 

    * expressão new
    * criar um novo objeto
    * this keyword
    
Referência Extra: https://blog.cod3r.com.br/funcoes-construtoras/
*/

function Person(name) {  // constructor
    this.name = name // propriedade chamada 'name'
    this.walk = function(){
        return this.name + " está andando"
    }
}

const samara = new Person("Samara") // instanciando = criando um objeto
const josh = new Person("Josh") 

console.log(samara)
console.log(samara.walk())
console.log(josh)
console.log(josh.walk())

// Existe no JS diversas funções construtoras

let myName = new String("Samara")
let birthday = new Date("2003-10-3")

console.log(myName)
console.log(birthday)