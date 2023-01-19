// clearTimeout vai cancelar um timeTimeout
// Assíncronismo

const timeOut = 3000
const finished = () => console.log('done!')

let timer = setTimeout(finished,timeOut)
clearTimeout(timer) // Cancelou a informação que foi guardada

console.log('Mostrar')