/* 

    Objeto Math
        * Retorna um número pseudo-aleatório entre 0 (inclusivo) e 1 (exclusivo)
        * Math.random()
        
    Referência Externa: 
        * https://www.mundojs.com.br/2018/04/11/javascript-o-objeto-math/
        * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/


// Gerar número entre 0 e 1
function getRandom() {
    return Math.floor(Math.random() * 100); // Com o "floor" o valor será arredondado para baixo
}

// Gerar número entre um valor mínimo e máximo
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}  

// Gerar número entre um valor mínimo e máximo, mas inteiro
function getRandomInt(min, max) {
    min = Math.ceil(min); // Não pode ser menor que "min", caso "min" não seja inteiro
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// Gerar número entre um valor mínimo e máximo, mas inteiro. Aqui incluirá o valor máximo
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
console.log(getRandom(10,20))
console.log(getRandomArbitrary(10,20))
console.log(getRandomInt(10,20))
console.log(getRandomIntInclusive(10,20))