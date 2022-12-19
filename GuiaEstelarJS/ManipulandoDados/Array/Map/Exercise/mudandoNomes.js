/*Para finalizar nossos exemplos utilizando o método map, vamos receber um array contendo o nome de algumas pessoas. Nosso objetivo será colocar em letra maiúscula todos os nomes que comecem com a letra A.*/

const nomes = ['Ana Luiza','Daniel','Victória','Luíza','Matheus','Alan'];

const novoArray = nomes.map((elemento => {
    if(elemento.charAt(0) === 'A'){
        return elemento.toUpperCase();
    } else{
        return elemento;
    }
}));

console.log(novoArray)

Output: ['ANA LUIZA','Daniel','Victória','Luíza','Matheus','ALAN']

// Método charAt() - Encontra os caracteres pelo index.

/* Para chegarmos ao objetivo proposto inicialmente, precisamos percorrer o array de nomes com o map e criar uma condicional, verificando se a primeira letra do elemento era “A”, através do método charAt() na posição zero. Se essa condição for verdadeira, o elemento será retornado com o nome todo em maiúsculo. Caso contrário, permanecerá normal. */