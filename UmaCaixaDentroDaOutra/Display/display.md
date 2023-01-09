## Display: block vs Display: inline

- Display: Apresentação da caixa
- Como as caixas se compartam em relação às outras caixas
- Comportamento externo das caixas (lado a lado/uma do lado da outra...)

| **block**                       | **inline**                      |
|---------------------------------|---------------------------------|
| Ocupa toda a linha, colocando o | Elemento ao lado do outro       | 
| próximo elemento abaixo desse   |                                 | 
|---------------------------------|---------------------------------|
| width e height são respeitados  | width e height não funcionam    |
|---------------------------------|---------------------------------|
| padding, margin,border irão     | Somente valores horizontais de  |
| funcionar normalmente.          | margin, padding e border        |
|---------------------------------|---------------------------------| 

exemplos
block: `<p> <div> <section>`, todos os headings `<h1><h2>...`
inline: `<a> <span> <strong> <em>`

Obs: Sempre que quiser que um elemento fique do lado do primeiro coloque a propriedade "inline" no primeiro, visto que, a partir da suposição de que o esse primeiro seja a tag <p>, então por padrão ela é `block`, logo ocupará toda a extensão daquela linha. Assim, ao colocarmos essa propriedade nessa tag, a sua extensabilidade irá diminuir.