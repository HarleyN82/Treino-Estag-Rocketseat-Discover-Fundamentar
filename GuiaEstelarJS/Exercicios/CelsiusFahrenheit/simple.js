/*
    Crie uma função que receba uma string em celsius ou fahrenheit
    e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

// Forma 01

function conversionCelsiusToFahrenheit(celsius){

    let f = (celsius * 9/5) + 32

    console.log(`Celsius: ${celsius}`)
    console.log(`Fahrenheit: ${f}`)
}

function conversionFahrenheitToCelsius(Fahrenheit){

    let c = (Fahrenheit - 32) * 5/9

    console.log(`Fahrenheit: ${Fahrenheit}`)
    console.log(`Celsius: ${c}`)
}

conversionCelsiusToFahrenheit(32)
conversionFahrenheitToCelsius(89.6)
console.log('\n')