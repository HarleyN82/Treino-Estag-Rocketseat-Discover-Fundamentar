// Estrutura de Repetição
// for...in
// Criará um loop em cima de um objeto

let person = {
    name: 'Joshua',
    age: 22,
    weight: 45.5
}

for(let property in person){
    console.log(property) // pegar propriedades
    console.log(person[property]) // pegar os valores das propriedades
}