/* 
    String
    * Cadeia de Caracteres

    "" // aspas duplas - 
    '' // aspas simples - 
    `` // template literals ou template strings - permitem textos multilinhas e expressões de linguagem com os caracteres ${ }
          Por exemplo: console.log(A soma de duas unidades é ${1+1})

    Obs: interpolação = ${}

    Referência Extra: https://programandosolucoes.dev.br/2020/12/29/separar-string-array-split/
*/

console.log("Estudando Strings com JavaScript")
console.log("Hello World")
console.log(typeof('Samara'))
console.log("")

let exemplo = "blablabla"
let Outroexemplo = new String("blablabla") // Se colocarmos String com a letra inicial maiúscula vira um objeto.
console.log(exemplo)
console.log(Outroexemplo)
console.log("")

console.log("Chamada de variáveis: " + nome) // Forma A de chamar variáveis
console.log(`Interpolação: A soma de duas unidades é ${1+1}`) // // Forma B de chamar variáveis
console.log("")

console.log("\"Samara\"") // imprime as aspas
console.log("'Samara'") // Assim apareceram as aspas simples. O inverso também ocorre.
console.log("")