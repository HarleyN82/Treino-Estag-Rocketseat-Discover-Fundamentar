/* 
    Vamos imaginar o seguinte cenário: Irá ocorrer uma competição de melhor fantasia na sua cidade, onde três pessoas receberão uma premiação. O sistema de ranking de posições será feito utilizando os arrays para armazenar os competidores, onde a posição dentro da lista reflete o desempenho na competição. Foi solicitada que você, como pessoa desenvolvedora, listasse competidores em um novo array, colocando a sua respectiva posição. Exemplo: “Matheus Felipe - 1ª posição”.
*/

const competidores = ['Daniel','Victória','Luíza','Matheus'];

const novoArray = competidores.map((elemento,index) => {
    return `${elemento} - ${index + 1}º posição`
})

console.log(novoArray);

Output: ['Daniel - 1º posição','Victória - 2º posição','Luíza - 3º posição','Matheus - 4º posição',]

/* Estamos fazendo um map no nosso array original de competidores, recebendo como parâmetro o elemento atual e o seu index. Porém, o index de um array sempre começa em zero. Em nosso ranking da competição, não existe nenhuma posição zero. Por isso, ao retornarmos a string contendo as informações dos vencedores, precisamos somar o index tual + 1. */