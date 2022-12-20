/* Manipulando Strings e Números com Arrays

    * Splice
    * Usado para adicionar/remover elementos de um array
    * Retorna um array com os elementos removidos
    * Altera o array
    * Para adicionar elementos: array.splice (índice, número de elementos, elemento)
    * Para remover elementos: array.splice (índice, número de elementos)
    * Somente pode ser usado para arrays
*/

// Adicionando Elementos
// array.splice(índice, número de elementos, elemento)
// índice - Posição do novo valor
// número de elementos - Informar quantos valores serão adicionados
// elemento - O valor adicionado
// Obs: Se você adicionar em um índice com elemento existente você o estará apagando

let array = ["Alexandre",123,"Student",81,]
console.log(array)

array.splice(1,1,"Novo Item Adicionado")
console.log(array)

// Removendo Elementos
// array.splice(índice, número de elementos)
// índice - Ponto de partida para deletar
// número de elementos - Ponto de chegada para deletar

let comida = ["Lasanha","Doritos","Cuzcuz","Pizza"]
console.log(comida)

comida.splice(1,2) // Sem o 2° parãmetro ele apaga todo o resto após o 1° parâmetro
console.log(comida)