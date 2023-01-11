// Eventos no HTML
function print(){
    console.log('print')
}

// Eventos de Teclado + Argument Event
// onkeydown...up...press...
const input = document.querySelector('input')
input.onkeydown = function (e) {
    console.log('rodei')
    console.log(e)
}

/* e.currentTarget - Alvo
e.key - Letra pressionada
e.currentTarget.value - Valor do alvo
... */

// Adicionando Eventos em JS (part 01)
const p = document.querySelector('p')
p.addEventListener = ("click", print)

// Adicionando Eventos em JS (part 02)
const p2 = document.querySelector('#p2')
p2.onclick = print;