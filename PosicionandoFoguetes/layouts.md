# Page Layouts

- Tables
- Floats e clear
- Frameworks e Grid Systems
- Flexbox
- Grid

## História

Antes só exista tables com a ideia de um componente no lado do outro, mas depois surgiu as "floats" elemento flutuantes e o "clear" para parar de flutuar e não atrapalhar os outros elementos.

Trabalhava-se muito com frameworks com a ideia de grid systems, no qual compreendia a nossa view como linhas e colunas e assim ter uma diversificação na hora de estilizar cada parte.

Então, veio a ideia dos flexbox e depois o grid.

## Posicionamentos

Controla onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

- Name: position
- Value: static | relative | absolute | fixed

Lembrando que o fluxo normal dos elementos é ficar um abaixo do outro, a não ser no caso de elementos inline, que ficam um ao lado do outro.

É diferente do values <position> que pode ser top,left e afins.

## Static

Por padrão os elementos são static. Isso significa que os elementos irão seguir o fluxo normal do HTML. Ficando um abaixo do outro.

## Relative 

- top,right,bottom,left,z-index

O position indica onde o elemento vai ser posicionado na página. Ao usar o position podemos adicionar outras propriedades como top, right, bottom, left e z-index, que vão determinar o posicionamento final do elemento.

Quando o position é relative os elementos são deslocados do seu posicionamento normal, mas sem afetar o posicionamento de outros elementos da página.

## Absolute

Quando o position é absolute o elemento é deslocado saindo do fluxo normal. O elemento de position absolute é posicionado em relação ao seu parent element mais próximo. Se esse elemento "pai" não existir, ele será posicionando em relação ao bloco contendo a raiz do elemento.

No exemplo que damos é como se fosse eliminado o espaço vazio que estava, sendo reorganizados os outros elementos.

Ele será relativo a todos.

## Fixed

Quando aplicado o position fixed é como se criasse um elemento flutuante que fica fixo na página, independente do scrolling feito.

## Element Stacking

É o empilhamento de elementos. Podemos usar o z-index para determinar a ordem da posição do elemento. Quanto maior o z-index, mais "acima" vai aparecer o elemento.

Obs: O último elemento tem mais força que o segundo e por ai vai.

## Flex

* Nos permite posicionar os elementos dentro da caixa.
* Controle em uma dimensão (horizontal ou vertical).
* Alinhamento, direcionamento, ordenar e tamanhos.

```css
div.parent {
	display: flex;
}
```

## Flex-direction
* Qual a direção do flex: horizontal ou vertical
* row | column

## Alinhamento
* justify-content
* align-items

## Grid

* Posicionamento dos elementos dentro da caixa
* Posicionamento horizontal e vertical ao mesmo tempo
* Pode ser flexível ou fixo
* Cria espaços para os elementos filhos habitarem

## Grid ou Flexbox

Podemos usar o Display Flex e Display Grid ao mesmo tempo, mas não no mesmo elemento se não um elimina o outro.