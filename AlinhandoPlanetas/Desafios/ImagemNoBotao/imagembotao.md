# Imagem no Botão

```html
<div class="container">
  <button>
    <img src="data:image/png;base64,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" alt="">
    <p>Picture</p>
  </button>
</div>
```

```css
.container{
  display:flex;
}

button{
  display:flex;
  align-items:center;
  gap: .4rem;
}

button img{
  display:cover;
  width: 2rem;
  height:2rem;
}
```