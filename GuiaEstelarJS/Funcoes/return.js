// Retornando valores em funções

const sum = function(number1,number2){
    total = number1 + number2
    return total
}

/*  É possível criar uma variável sem declará-la, nomea-lá como "let"...
Mas tem o perigo dê-la ser usada na função inteira, logo não é recomendado.
Visto que, pode ter confronto de dados. Assim, smepre declara suas variáveis.

Ex: let total = 0
Ao fazer isso em cima da função o "total" não será 0, mas 59.
*/

let n1 = 34
let n2 = 25

console.log(`O número 1 é ${n1}`)
console.log(`O número 2 é ${n2}`)
console.log(`A soma é ${sum(n1,n2)}`)

console.log(total) 

/* Eu consigo acessar essa informação, após executar a função, porque fica
registrado a respsota e como o "total" é o retorno da função é o mesmo
que chamar a própria função.*/