/* 
    Nesse exemplo, teremos um array de objetos contendo propriedades de nome e preço de alguns produtos. Nosso objetivo com o map será armazenar em um novo array o nome do protudo junto com o preço em uma string da seguinte forma: “Nome do produto - R$ 10,00”. Vamos lá?
*/

const produtos = [
    {
        nome: 'Hamburguer',
        preco: 'R$ 25,00'
    },
    {
        nome: 'Refrigerante',
        preco: 'R$ 8,00'
    },
    {
        nome: 'Batata Frita',
        preco: 'R$ 15,00'
    },
];

const novoArray = produtos.map((elemento =>{
    return `${elemento.nome} - ${elemento.preco}`
}))

console.log(novoArray);

Output: ['Hamburguer - R$ 25,00', 'Refrigerante - R$ 8,00', 'Batata Frita - R$ 15,00']

/* Repare que utilizamos o método map para percorrer o nosso array produtos e retornar um novo array contendo o nome e valor de cada um dos elementos presentes no array original. */