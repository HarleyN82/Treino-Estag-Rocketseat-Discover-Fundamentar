/*
    Crie uma função que receba uma string em celsius ou fahrenheit
    e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

// Forma 3

function transformDegree(degree){

    const celsiusExists = /[0-9]c$/i.test(degree) // expressão regular
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }

    // fluxo ideal, F --> C
    let updatedDegree = Number(degree.toUpperCase().replace("F","")); //  Tirou a unidade e converteu string->number
    let formula = fahrenheit => fahrenheit - 32 * 5/9 // função
    let degreeSign = 'C'

    // fluxo alternativo, C --> F
    if(celsiusExists){
        updatedDegree = Number(degree.replace(/C/i,'')); //  Tirou a unidade e converteu string-> number com expressão regular
        formula = celcius => celcius * 9/5 + 32 // função
        degreeSign = 'F'
    }
    
    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('50C'))
    console.log(transformDegree('50F'))
    // console.log(transformDegree('50ec')) // error
    // transformDegree('50Z') // error
} catch(error){
    console.log(error.message)
}