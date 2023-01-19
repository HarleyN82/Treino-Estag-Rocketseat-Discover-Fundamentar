// clearInterval vai cancelar um setInterval registrado

const timeOut = 1000
const checking = () => console.log('checking')

let interval = setInterval(checking,timeOut)
// clearInterval(interval) // cancela automaticamente

setTimeout(() => clearInterval(interval),4000) 
// Após um certo tempo os 'checkings' irão parar
// Até 3s vai rodar 'checking'
// O 1° segundo é o tempo de preparação

console.log("Rodou muito")