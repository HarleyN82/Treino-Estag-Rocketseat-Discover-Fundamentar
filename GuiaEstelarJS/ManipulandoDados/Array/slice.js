/* Manipulando Strings e Números com Arrays

    * Slice
    * Copia os elementos de um array
    * Retorna esses elementos como um novo array
    * Não altera o array original
    * Começa o fatiamento em de e vai até determinado índice: array.slice(de, até)
    * slice() não inclui o elemento no parâmetro de índice “até”
    * Pode ser usado para arrays e strings
*/

// Adicionando Elementos
// array.slice(de, até);
// de - Ponto de partida para exibir
// até - Ponto de chegada para exibir (mas não envolve ele próprio)

let array = ["Alexandre",123,"Student",81,]
console.log(array)

let newArray = array.slice(1,3)
console.log(newArray)
