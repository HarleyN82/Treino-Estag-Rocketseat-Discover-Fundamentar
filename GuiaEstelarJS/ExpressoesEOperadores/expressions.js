/* Expressões e Operadores

- Expressions - Toda e qualuer linha de código que soluciona algo
- Operators - Símbolos que atribuem relacionamentos 
    Binary - entre dois elementos
    Unary - entre si mesmo
    Ternary - entre três elementos
*/

// Definimos uma variável que vai "solucionar" ou fazer parte da solução.

let number = 1; // Nesse caso é obirgatório o ';'

// Função autoexecutável 
// Sem o ';' o JS entende que a função é um parâmetro à variável anterior.

(function(){
    console.log('alo')
})

// Operador Binário
console.log(++number) // Incremento 
console.log(--number) // decremento 

// Operador Unário 
console.log(typeof number)

// Operador Ternário
console.log(true ? 'alo' :'nada')