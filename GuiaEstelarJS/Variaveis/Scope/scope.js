// Exemplo prático de escopo 

function soma(){
    let a = 1;
    let b = 2;
    return a + b;
}

console.log(soma())

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

//--------//

let z = 1;

{
    z = 5; // assim funciona, porque estou substituindo valores
    console.log("Existe z antes do bloco? " + y); 
}