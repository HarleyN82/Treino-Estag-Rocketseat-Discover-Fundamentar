// callback function
// Uma callback function é uma função que está sendo passada para outra função como parâmetro.

function sayMyName(name){
    console.log('antes de executar a função callback')
    name() // identificando que meu parâmetro retornará uma função
    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
) 

// Uma outra forma de aplicar as callbacks

function exibir(num){
    console.log(`\nA operação resultou em: ${num}`)
}

function soma(a,b,callback){
    let op = a + b;
    callback(op);
}

soma(2,2,exibir)

// Obs: É comum callback aparecerem como "cb"