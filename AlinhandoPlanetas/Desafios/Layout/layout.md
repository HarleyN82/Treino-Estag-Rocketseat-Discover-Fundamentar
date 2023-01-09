# Layout 2 Pages

```html
<div class="page">
  <aside>Coluna Esquerda</aside>
  <main>Coluna Direita</main>
</div>
```

```css
.page{
  border: 2px solid;
  min-height:90vh;
  display:flex;
  text-align:center;
}

aside{
  background:lightgreen;
  flex-basis:25%;
}

main{
  background:lightblue;
  flex:1;
}
```