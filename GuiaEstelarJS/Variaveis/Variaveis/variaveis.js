/*
    Variáveis
    - Escopo Global
    - Escolo Local
    - Usa-se o sinal de "=" para receber valores

    # Var
        - Escopo Global - Acessível em qualquer parte do código
        - Usada para declarar
        - Pode-se reatribuir valores

     # Let
        - Escopo Local - Acessível apenas dentro do código
        - Usada para declarar
        - Pode-se reatribuir valores
    
    # Const
        - Escopo Global
        - Usada para declarar
        - Não pode-se reatribuir valores
    
    Obs:JS tem como boa prática a prática do camelCase para nomear variáveis.
    Além de ser case sensitivo, logo um nome com letra minúscula o e mesmo 
    nome com maiúscula são nomes diferentes.
*/

var clima = "Quente" // declarar uma variável em escopo global

if(true){
    clima = "frio" // reatribuindo valor
}

//-------//

let comida = "Doritos" // declarar uma variável global
comida = "tapioca" // reatribuindo valor

if(true){
    let pets = "gato"
    console.log(pets)
}

//-------//

const carro = "Motorola" 
// carro = "Fusca" // Ele não muda de valor durante a aplicação

console.log(clima)
console.log(comida)
console.log(carro)