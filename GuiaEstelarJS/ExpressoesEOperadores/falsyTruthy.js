/* 
    FALSY 
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false (normal)

    Através do "coersion" esses valores são interpretados como false:
    0  -0  ""  null  undefined  NaN
*/

console.log(false ? 'verdadeiro' : 'falso') // o primeiro operador é falsy

/*
    Truthy 
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log({} ? 'verdadeiro' : 'falso') // o primeiro operador é truthy

// Tudo isso é sem levar me consideração comparativos