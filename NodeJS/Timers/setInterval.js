// setInterval irá rodar uma função N vezes
// depois de X milissegundos
// Contexto: um fiscal vai conferir os produtos de uma loja

const timeOut = 1000
const checking = () => console.log('checking')
setInterval(checking,timeOut)
console.log("Rodou muito")