# Introdução
## O que significa CSS?

* Cascading Style Sheet
* Código para criar estilos no HTML
* HTML é a estrutura, e o CSS é a beleza
* Não é uma linguagem de programação
* É uma linguagem style sheet

## Comentários

* Não irá afetar o seu código
* Ajuda a lembrar blocos de códigos
* Deixa dicas para leitura
* Ajuda outros a entenderem
* Nunca esqueça de fechar um comentário aberto

Comentários começam com `/*` e terminam com `*/`

# Anatomia

```css

h1{
    color: blue;
    font-size: 60px;
    background: gray;
}

```

* Selector: É qualquer tag do html.Ex. h1.
* Declaration: É tudo que está dentro das {}.
* Properties: Características das Tags. Ex: Color.
* Property Value: Valores das propriedades. Ex: Azul.

# Selectors
Conecta um elemento HTML com o CSS

## Tipos

* Global selector `*`
* Element/Type selector `h1,h2,p,div`
* ID Selector `#box, #container`
* Class Selector `.red, .m-4`
* Attribute selector, Pseudo-class, Pseudo-element, e outros.

# Box Model

É uma caixa retangular. Essa caixa possui as mesmas propriedades de uma caixa 2D, e tem como propriedades:

- Tamanho (largura x altura): width e height, respectivamente
- Conteúdo: o content
- Bordas: o border
- Preenchimento interno: o padding
- Espaços fora da caixa: a margin

Quase todo elemento de uma página é considerado uma caixa: Posicionamentos, tamanhos, espaçamentos, bordas, cores, então, em suma, elementos HTML são caixas, assim como quase tudo no CSS.

* Você irá perceber que (quase) tudo são caixas do CSS
* Posicionamentos, tamanhos, espaçamentos, bordas, cores
* Caixa pode ficar ao lado uma da outra, ou acima
* Elementos HTML são caixas

# A Cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo. 
* Se você define como cor de uma tag como vermelho e depois zul, prevalece o azul.

É levado em consideração 3 fatores

1. Origem do estilo
2. Especificidade
3. Importância

### Origem do estilo

inline > tag style > tag link

- inline é quando atribuimos o estilo css como propriedade na tag;
- tag style é só colocar <style></style>

Ele foca no principal, ou seja, se eu tenho dois links o que vai prevalecer é o último.

### Especificidade

É um cálculo matemático, onde cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

0. Universal selector, combinators  nagation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="radio"])
100. ID selector
1000. Inline

Para aplicar em profundidade você pode pegar: o seu "ID , ID + tag."

### Importância

* cuidado, evite o uso
* não é considerado uma boa prática
* ela quebra o fluxo da cascata

```css

h1{
    color:blue !important;
}

```

# At rules

* Está relacionado ao comportamento do CSS
* começa com o sinal de `@` seguido do identificador e valor

## Exemplos Comuns

@import serve para incluir um CSS externo.
@media são regras condicionais para vários dispositivos.
@font-face é para colocar fontes externas.
@keyframes serve para as animations do CSS.

```css

@import "https://local.com/style.css"

@media (min-width:500px){

}

@front-face{

}

@keyframes nameofanimation{

}

```

# Shorthand

É basicamente a ideia de junção de propriedades, para que fiquem de forma resumida e legível.

Abaixo um exemplo de propriedades com e sem o shorthand:

{
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand*/
    background: #000 url(images/bg.gif) no-repeat left top;

    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;
    font-family: Arial, sans-serif;

    /* font shorthand */ 
    font: bold italic .8em/1.2 Arial, sans-serif;
}

Algumas das características do shorthand:

Não irá considerar propriedades anteriores, ou seja, caso faça um shorthand, apenas ele será considerado, quaisquer propriedades anteriores serão substituídas pelas do shorthand.

Geralmente, a ordem descrita não importa, mas, se houver muitas propriedades com valores semelhantes, poderemos encontrar problemas.

Os valores que não forem especificados irão assumir o valor padrão.

Por fim, geralmente, a ordem descrita não importa, mas, caso haja muitas propriedades com valores semelhantes, poderemos encontrar problemas.

**https://developser.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties**

# Funções

Um tipo de valor existente no CSS, é estruturado com um nome seguido de abre e fecha parênteses.

Recebe um argumento, que são seus valores.

Um exemplo de função é:

```css

@import url("https//urlaqui.com/style.css");

{
    color: rgb(255,0,100);
    width: calc(100% - 10px);
}

```

# DevTools

Uma das ferramentas mais importantes para o desenvolvedor CSS é o DevTools (do inglês, Ferramentas de Desenvolvedor), é recomendado que você estude e faça uso da mesma, pois será muito utilizada.

# Cuidados com a escrita

É importante prestar atenção à sua escrita do CSS, identar seu código para facilitar a leitura, e mais importante, manter tudo organizado e funcionando!

# Vendor prefixes

São coisas que permitem que browsers adiocionem features a fim de colocar em uso alguma novidade que vemos no CSS.

Exemplos:

```css

p {
	-webkit-background-clip: text; /*Chrome, Safari, iOS e Android*/
	-moz-background-clip: text; /* Mozilla (Firefox) */
	-ms-background-clip: text; /* Internet Explorer ou Edge*/
	-o-background-clip: text; /* Opera */
}
```

Você também pode consultar se a feature pode ser utilizada através dos sites:

https://ireade.github.io/which-vendor-prefix

https://caniuse.com


