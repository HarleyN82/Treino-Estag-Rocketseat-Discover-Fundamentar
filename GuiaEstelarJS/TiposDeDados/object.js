/* 
    Object
        * Objeto é uma coleção de propriedades, e uma propriedade é uma 
        associação entre um nome (ou chave) e um valor. Um valor de propriedade
        pode ser uma função, que é então considerada um método do objeto.
        * Propriedades/Atributos
        * Funcionalidades/Métodos
    { propriedade: "valor" }

*/

console.log({
    name:"Samara",
    idade: 19,
    andar:function(){
        console.log('andar')
    }
})

console.log(" ")

let pessoa = {
    nome: "Sophia",
    idade: 22,
    feliz: true,
    pets:["cachorro","gato","pássaro"],
    carros:{
        camaro: {
            placa: "123456",
            cor: "verde"
        },
        uno:{
            placa:"987543",
            cor:"branco"
        }
    },
    andar:function(km){
        alert(pessoa.nome + " andou " + km + "km")
    }
}

console.log(pessoa)
console.log(pessoa.nome) // Para acessar dados dentro do objeto.
console.log(pessoa.idade)
console.log(`${pessoa.nome} é feliz ? ${pessoa.feliz}`)
console.log(`${pessoa.nome} tem um ${pessoa.pets[0]}`)

pessoa.nome = "Lucas" // reescrevendo um valor de uma chave
pessoa.pets[3] = "papagaio" // adicionando novos valores

console.log(pessoa.nome)
console.log(pessoa.pets[3])
console.log(pessoa.carros.camaro.cor) // acessando infinitos objetos
console.log(pessoa.andar(10)) // métodos (com parâmetros) em objetos