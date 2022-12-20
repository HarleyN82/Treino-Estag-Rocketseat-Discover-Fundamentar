/* 
    Operadores Unários
        - typeOf
        - delete
    
    Em operadores unários, os mais comuns são o typeof e o delete, onde o typeof serve para saber o tipo de dado que temos na expressão, e o delete vai deletar alguma propriedade de um objeto, desde que ela exista.
*/

const person = {
    name: 'Josh',
    age:22
}

console.log(person)
console.log(typeof person)

delete person.age // Procura propriedade e a deleta
console.log(person)