/* Manipulando Arrays
    * Length
    * Contar elementos de um array
*/

console.log([
    "a",
    {type:"array"},
    "c",
    function() {return "alo"},
].length)

// Ao invés do .length você pode colocar [2] para acessar o valor da 2 posição do array.

// Você pode também acessar diretamente os valores como "type"...

const myArray = [
    "a",
    {type:"array"},
    "b",
    function() {return "alo"},
]

console.log(myArray[2])
console.log(myArray.length)
console.log(myArray[1].type)