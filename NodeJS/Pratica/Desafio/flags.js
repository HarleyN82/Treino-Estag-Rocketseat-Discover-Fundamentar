/* 

O primeiro, irá exportar uma função chamada getFlag()
que receberá um argumento do tipo String.

Essa função deverá buscar dentro do array process.argv a flag desejada, que é a String e retornar o valor da flag.

*/

module.exports = function getFlagValue(flag){
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
}