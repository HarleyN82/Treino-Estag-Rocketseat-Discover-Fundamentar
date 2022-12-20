// if...else

let temperature = 36.9 // 50
let supremeTemperature = temperature > 50
let hightTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(supremeTemperature) {
    console.log('Morto')
} else if(hightTemperature) {
    console.log('Febre')
} else if(mediumTemperature){
    console.log('Febre moderada')
} else{
    console.log('Saudável')
}

/* if(temperature >= 50) {
    console.log('Morto')
} else if(temperature > 37.5 ) {
    console.log('Febre')
} else if( temperature >= 37){
    console.log('Febre moderada')
} else{
    console.log('Saudável')
} */

// Quando tiver apenas uma linha dentro de código voc~e pode tirar as {}