// setTimeout rodar uma função depois de X milissegundos
// Ele pede dois parâmetros (função, valorDeTempo)
// Assíncronismo

const timeOut = 3000
const finished = () => console.log('done!')
setTimeout(finished,timeOut) // A função será chamada de volta após 3s
console.log('Mostrar')
