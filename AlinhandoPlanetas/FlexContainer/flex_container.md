# Propriedadaes do Flex Container

* Flex-direction
* Flex-wrap
* Flex-flow
* Justify-Content: Alinhamento
    * Principal
    * Cruzado
* Gap: Espaços entre os itens

## Flex-direction: Direção dos Itens

- Flex é uma dimensão (horizontal ou vertical)
- podemos mudar a direção com `flex-direction`
- valores: (row | row-reverse | column | column-reverse)

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container{
  display:flex;
  flex-direction:row-reverse; /* row (padrão) - column - column-reverse*/
}
.item{
  background-color: gray;
  border: 1px solid;
  flex:1;
}
```

Obs: Quando mudamos de row -> column, modificamos o eixo principal.

## Flex-wrap: Multilinhas

- Capacidade que o flex tem de usar múltiplas linhas. (mais de um eixo principal).
- Cada nova linha, um novo flex container.

```html
<div class="box">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

```css
.box{
  display:flex;
  flex-wrap:wrap; /*wrap-reverse - também serão quebrados para cima*/
  justify-content:center; /*Se não tivesse um novo eixo esse elemento não seria respeitado*/

  border: 1px dashed red;
}
.box div{
  border: 1px solid;
  width:80px; /*800px;*/
}
```

Obs: Se o flex container já tiver o tamanho ideal para caber todas as linhas, então permanece a formúla padrão, mas caso não, então se criará novas linhas dentro desses flex. No caso, ele vai se expandir verticalmente.

## Flex-Flow

- shortland
- flex-direction || flex-wrap

```css
.box{
  display:flex;
  flex-flow: row wrap;
  border: 1px dashed red;
}
.box div{
  border: 1px solid;
  width:80px; /*800px;*/
}
```

## Justify-Content: Alinhamento (principal)

- Alinhamento dos elementos dentro do container
- Distribuição dos elementos

**Valores**

- flex-start
- flex-end
- center
- space-around (ao redor)
- space-between (entre eles)
- space-evenly (por entre eles - antes e depois)

```css
.box{
  display:flex;
  justify-content:center;
  border: 1px dashed red;
  /*flex-direction:column;*/
  /*height:150px;*/
}
.box div{
  border: 1px solid;
}
```

## Justify-Content: Alinhamento (cruzado)

- Alinhamento dos elementos no eixo cruzado

**Valores**

- stretch (esticar - padrão)
- flex-start
- flex-end
- center

```css
.box{
  /*display:flex;*/
  /*flex-direction:column;*/
  align-items:flex-start;
  border: 1px dashed red;
  height:150px;
}
.box div{
  border: 1px solid;
}
```

## Gap: Espaços entre os itens

- Espaços entre os elementos

**Valores**

Unidades de medidas
fixas: px,pt
flexíveis: %,em,rem

```css
.box{
  /*display:flex;*/
  /*flex-direction:column;*/
  align-items:flex-start;
  border: 1px dashed red;
  gap: 2rem;
  height:150px;
}
.box div{
  border: 1px solid;
}
```