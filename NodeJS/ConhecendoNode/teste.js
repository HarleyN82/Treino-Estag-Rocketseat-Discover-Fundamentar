function nada(){
    console.log("Aleatório")
}

function a(){
    console.log('a')
    return
}

function b(){
    console.log('b')
    a()
    return
}

b()
nada()

/* 

Pela nossa lógica, o primeiro a ser executado seria o "a", porque ele veio primeiro na construção. De fato, o retorno da função A será o primeiro a vir, mas porque na pilha de chamadas, chamamos a função B que, por sua vez, está chamando o A antes do seu próprio retorno. Então, se eu inverter o resultado será diferente.

console.log('a')
function a()
console.log('b')
function b()
global

Pela nossa lógica, a primeira função a ser executada é a "b", entretanto nós apenas a declaramos primeiro, mas quem chamamos, ou seja, pedimos uma execução foi a "a". Então, pelo JS pegar o último código recente ele executará a função A primeiro.
*/

console.log("Antes da Callback Queue");
setTimeout(() => {console.log('callback queue')},1000);
console.log("Mais um evento");
console.log("Mais um evento 2");