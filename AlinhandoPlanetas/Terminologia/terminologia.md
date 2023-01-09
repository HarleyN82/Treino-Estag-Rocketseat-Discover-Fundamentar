# Terminologia 

- Flex Container 
    - Flex item
- Nesting
- Axis
    - main
        - start,end
    - cross
        - start,end
- Flex sizing
    - flexível
    - altera width/height dos itens para preenchimento dos espaços do flex container

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
  justify-content:space-around; /*flex-end*/
  flex-direction:column;
  /*height:100vh;*/
}
```

## Flex Container e Nesting

* Flex Container: É uma caixa que contém elementos dentro, ou seja, os "flex item".
* Nesting: Um elemento dentro de outro elemento.

Obs: No exemplo acima, o "container" só é um `flex container`, porque foi atribuído a ele a propriedade `display:flex`.

## Axis

* main: Se refere ao eixo (axis) principal que tem começo e fim.
* cross: Se refere a um eixo (axis) cruzado que tem começo e fim.

Obs: No exemplo acima, existe um eixo (uma linha invisível) que conecta os elementos. Assim, quando colocamos `flex-direction:column`, então atribuindo aos elementos uma configuração, a partir dos seus eixos (linhas laterais e horizontais).

## Flex Sizing

No exemplo abaixo, colocamos `flex:1` para que pudesse ser preenchido por completo a largura de cada item, além de suas respectivas alturas.

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
  border: 1px solid red;
  height: 80vh; /*A altura fica fixa, mas ao mesmo tempo se molda a view*/
}
.item{
  background-color: gray;
  border: 1px solid;
  flex:1;
}
```