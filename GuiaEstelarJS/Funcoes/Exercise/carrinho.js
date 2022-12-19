/* 
    1. Usando a função map, crie um novo array a partir do array carrinho com o elemento JSON, apenas com os preços dos produtos. Exemplo: [ 3.45, 13.9, 41.22, 7.5]
*/

// Forma 01
const carrinho = [
    {nome: "Borracha", preco: 3.45},
    {nome: "Caderno", preco: 13.90},
    {nome: "Kit de Lapis", preco: 41.22},
    {nome: "Caneta", preco: 7.50}
]

const novoCarrinho = carrinho.map((elemento =>{
    return `${elemento.preco}`
}))

console.log(novoCarrinho)

// Forma 02
/* const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(j => JSON.parse(j)).map(p => p.preco)
console.log(resultado)*/