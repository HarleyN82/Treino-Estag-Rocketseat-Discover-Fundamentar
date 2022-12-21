/*
    Crie uma função que receba uma string em celsius ou fahrenheit
    e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

// Forma 2

function showCelcius(value,c){
    console.log("Conversion Fahrenheit to Celsius")
    console.log(`Fahrenheit: ${value}`)
    console.log(`Celsius: ${c}`)
}

function showFahrenheit(value,f){
    console.log("\nConversion Celcius to Fahrenheit")
    console.log(`Celsius: ${value}`)
    console.log(`Fahrenheit: ${f}`)
}

function conversion(number, unidade){

    if(number == NaN || number != NaN){

        let value = Number(number);

        /*console.log(typeof number)
        console.log(typeof value)*/

        let c = (value - 32) * 5/9
        let f = (value * 9/5) + 32

        if(unidade == 'c' || unidade == 'C'){
            return showCelcius(value,c)
        } else if(unidade == 'f' || unidade == 'F'){
            return showFahrenheit(value,f)
        } 
        
        return console.log(`\nValor inválido: ${unidade}`)
       
    } 
}

conversion(89.6,'c')
conversion(32,'f')
conversion('32','dog')