// Array no Código

const pilotos = ['Senna','Prost','Schumacher','Hamilton']

// identificar o tamanho do array 
console.log(pilotos.length);

// a indexação (index) começa pelo número 0 
console.log(pilotos[0]) // Senna
console.log(pilotos[3]) // Hamilton

// iterável

for (let piloto of pilotos) {
    console.log(piloto)
}

// Adiconar o primeiro item do array 
pilotos.push("Josh");
console.log(pilotos);

// Deletar o primeiro item do array
pilotos.shift();
console.log(pilotos);

// encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'senna')
if(!senna){
    console.log("Não encontrado");
}

// deletar um elemento 
pilotos.splice(1,1)
console.log(pilotos)