/* Manipulando Strings e Números

    * Split
    * Separa tudo dentro da variável frase de acordo com o que foi pedido dentro dos (), ou seja, se tivesse virgula ficaria (,).
*/

let phrase = "Eu amo ler e assistir!"

// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque_

let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")

console.log(myArray)
console.log(phraseWithUnderscore)
console.log(phraseWithUnderscore.toUpperCase()) // manipulação dupla

// split + reverse + join
// Literalmente reverte as palavras
console.log(phrase.split("").reverse().join("")); 