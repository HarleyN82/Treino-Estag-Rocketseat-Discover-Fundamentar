# Propriedades para os itens

- flex-basis (tamanho)
- flex-grow (adapta e cresce)
- flex-shrink (encurtar/comprimir)
- flex (shorthand para os três acima)
- order

## Flex-Basis

- Largura e altura dos itens (interna)

```css
.box{
    display:flex;
    border: 1px dashed red;
}
.box div{
    border: 1px solid;
    flex-basis:25px; /*auto*/
}
```

Obs: Para alterar um item em específico e deixar os outros itens normais é preciso deixar o `flex-basis:auto` e usando as pseudo-class, por exemplo, você altera qual item quiser.

```css
.box{
    display:flex;
    border: 1px dashed red;
}
.box div{
    border: 1px solid;
    flex-basis:auto;
}
.box div:nth-child(1){
    width:250px;
}
```

Obs2: Se mudarmos a direção, então esse flex não será mais width, mas height.

```css
.box{
    display:flex;
    flex-direction: column;

    border: 1px dashed red;
}
.box div{
    border: 1px solid;
    flex-basis:auto;
}
.box div:nth-child(1){
    height:250px;
}
```

## Flex-Grow

- O crescimento do item dentro do container em relação aos espaços vazios.

```css
.box{
    display:flex;
    /*Flex-Direction:column*/
    border: 1px dashed red;
    /*height: 150px*/
}
.box div{
    border: 1px solid;
}
.box div:nth-child(2),
.box div:nth-child(3){
    flex-grow:1;
}
.box div:nth-child(1){
    flex-grow:2; /*Pegue duas frações do espaço vazio e coloque para o primeiro item*/
}
```

## Flex-Shrink

- O encolher do item dentro do container.

```css
.box{
    display:flex;
    /*Flex-Direction:column*/
    border: 1px dashed red;
    width: 160px;  /*heigth: 160px*/
}
.box div{
    flex-basis: 100%;
    border: 1px solid;
}
.box div:nth-child(2){
    flex-shrink:0; /*Envolve 100% da caixa, expulsando os outros*/
}
```

## Flex-Shorthand

- Shorthand
- flew-grow flex-shrink flex-basis
- podem ter 1,2 ou 3 valores

```css
.box{
    display:flex;
    /*Flex-Direction:column*/
    border: 1px dashed red;
    width: 160px;  /*heigth: 160px*/
}
.box div{
    flex: 1 0 40px;
    border: 1px solid;
}
```

## Alterando tamanho de múltiplos itens

```html
<div class="page">
  <aside>Aside</aside>
  <main>
    Main
    <section>Content 1</section>
    <section>Content 2</section>
    <section>Content 3</section>
  </main>
</div>
```

```css
.page{
  border: 2px solid;
  min-height:90vh;
  display:flex;
}
aside{
  background:lightgreen;
  flex:1;
}
main{
  background:lightblue;
  flex:2;
  
  display:flex;
  flex-direction:column;
}
main section:nth-child(1){
  background:lightgoldenrodyellow;
  flex:2 0;
}
main section:nth-child(2){
  background:lightsalmon;
  flex:0 80px;
}
main section:nth-child(3){
  background:lightpink;
  flex:1 0;
}
```

Obs: Flex-Grow/Shrink < Flex-Basis.

## Order

Ele modifica de maneira visual, mas não estrutural o html.

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
    /*Flex-Direction:column*/
    border: 1px dashed red;
    width: 160px;  /*heigth: 160px*/
}
.box div{
    border: 1px solid;
}
.box div:nth-child(1){
    order:1;
}
.box div:nth-child(2){
    order:0;
}
.box div:nth-child(3){
    order:0;
}
.box div:nth-child(4){
    order:-1;
}
```