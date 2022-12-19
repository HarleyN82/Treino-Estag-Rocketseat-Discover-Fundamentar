//length
// Tamanho do array = Número de elementos
let arr = [1,2,3,4,5];
console.log(arr.length);

// push(valor)
// Adicionar elementos
arr.push(6);
arr.push("Qualquer coisa");
console.log(arr);

// pop
// Remove o último valor do array
arr.pop();
console.log(arr);

// unshift(valor)
// Adicionar o valor no inicio do array
arr.unshift(0);
arr.unshift("teste");
console.log(arr);

// shift
// Remover o valor no inicio do array
arr.shift();
console.log(arr);

//Acessar o último elemento do array
console.log(arr[arr.length - 1]);

// isArray
// Verificar se era um array
console.log(Array.isArray(5));
console.log(Array.isArray(arr));

//splice(localDovalor,valorDeletado,valorAdicionado)
// Adicionar um valor no meio do array. Além de, remover algo específico.
arr.splice(2,0,999);
console.log(arr);

//splice(indiceDeletado,quantidade)
// 5(index para iniciar contagem) e 1(valor até onde ir)
// A partir do índice remove apenas a quantidade dada
arr.splice(5,1);
console.log(arr);

// slice(indiceDeletado,quantidadeDeElementosRemovidos)
// remove 1 ou mais itens em qualquer posição do array
arr.slice(1,1)
console.log(arr);

// indexOf
// Retorna o valor a partir do índice
console.log(arr.indexOf(5));

// join(separador)
// Consegue transformar array em string
let arr2 = ["O","rato","roeu","a","roupa","do","rei","de","Roma"];
console.log(arr2.join(" "));

// reverse
console.log(arr2.reverse());

// map
// percorre todos os elementos do array e retorna algo específico
let novoArray = arr.map((elemento) => {
    console.log(elemento)
    return elemento * 2;
});
console.log(novoArray);

/*Quero remover um elemento, mas não sei sua posição:*/

let techs = ['html','node','css']
let index = techs.indexOf('html')
techs.splice(index,1)
console.log(techs)