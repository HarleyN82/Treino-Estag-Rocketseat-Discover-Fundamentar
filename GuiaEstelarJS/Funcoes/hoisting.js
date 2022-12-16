// function hoisting
// O JavaScript possui function hoisting, permitindo que uma função seja declarada depois de ser utilizada, pois faz algo similar a elevar no código declarações de funções. Porém isso não acontece dentro de variáveis.

sayMyName()
//callDog()

function sayMyName(){
    console.log('Samara')
}

// O hoisting não funciona com funções anônimas (declaradas por variáveis), porque precisa ser inicializada. Para que a elevação ocorre-se seria preciso declarar a variável e depois inicializá-la com a função.

const callDog = function(){
    console.log('au au...')
}