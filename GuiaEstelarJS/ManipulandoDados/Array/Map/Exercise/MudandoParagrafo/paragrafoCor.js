const paragrafos = document.querySelectorAll('p'); // capturando elementos
console.log(paragrafos);

Array.from(paragrafos).map((elemento => {
    elemento.style.color = 'red';
}));

/* 
    Primeiro, criamos uma constante paragrafos para capturar todos os elementos do nosso HTML. Feito isso, vamos precisar transformar essa NodeList em um array através do método Array.from. Dessa forma, poderemos utilizar o map e percorrer cada elemento da lista, alterando a sua cor através da propriedade style.
*/