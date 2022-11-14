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
insline: `<a> <span> <strong> <em>`