/* 
    Métodos de String
        * O objeto String também possui métodos muito uteis;
        * Que vão nos auxiliar a manusear textos nos nossos softwares;
*/

let nome = "Samara"
let sobrenome = "Silvia"
let espaco = "       espaço      "
let frase = "O rato roeu a roupa do rei de Roma";
let frase2 = "Eu tenho eu?";
let frase3 = "Eu sou perfeita e perfeita"

// concat
// Concatena o nome + sobrenome
console.log(nome.concat(sobrenome));

// indexOf
// Retorna por index o que buscamos
console.log(nome[2]);
console.log(frase.indexOf("roeu"));

// lastIndexOf
// Retorna a última palavra de duas que estão dupplicadas
console.log(frase3.lastIndexOf("perfeita"));

// slice
// Encontra a palavra/caractere e extrái (inserindo index de inicio e fim)
console.log(frase.slice(7,11))
console.log(frase)

// replace
// você muda a frase por outra com essa especificação.
console.log(frase2.replace("?","!"));
console.log(frase.replace("roeu","teste"));
console.log(frase);

// startsWith
// começa com a letra "o"?
console.log(`A frase começa com 'o'? ${frase.startsWith("o")}`); 

// endsWith
// termina com a letra "a"?
console.log(`A frase termina com 'a'? ${frase.endsWith("a")}`); 

//substr(index)
// Retira qualquer letra que você quiser
console.log(nome.substring(1));

// charAt(index)
// Pegamos palavra por palavra
console.log(nome.charAt(0));

// trim
// Eliminar espaços
console.log(espaco);
console.log(espaco.trim());