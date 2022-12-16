/* 

Hoisting move toda e qualquer declaração de variável ou função para o 
topo do escopo onde as mesmas foram declaradas.

No caso, mesmo que eu faço um console.log de uma variável e a declara só 
embaixo, devido ao hosting ele vai "puxar" essa variável para antes do 
console. Tudo isso por baixo dos panos.

Isso só funciona com o "var"

Referência Extra: https://fellowsdevel.com/o-que-e-hoisting-no-javascript/

*/

{
    console.log("Existe x antes? " + x); 
// ele vai exibir algo (indefinido), por causa do hoisting
}

var x = 10;

console.log("Existe x depois: " + x);

//-------//

{
    let y = 5;
    console.log("Existe y antes do bloco? " + y); 
    // let y = 5 // não funciona
}

// console.log("Existe y depois do bloco? " + y); // não funciona