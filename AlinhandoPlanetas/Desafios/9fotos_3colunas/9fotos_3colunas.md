# 9 Fotos e 3 Colunas

```html
<div class="gallery">
  <img src="https://source.unsplash.com/random?id=1" alt="">
  <img src="https://source.unsplash.com/random?id=2" alt="">
  <img src="https://source.unsplash.com/random?id=3" alt="">
  <img src="https://source.unsplash.com/random?id=4" alt="">
  <img src="https://source.unsplash.com/random?id=5" alt="">
  <img src="https://source.unsplash.com/random?id=6" alt="">
  <img src="https://source.unsplash.com/random?id=7" alt="">
  <img src="https://source.unsplash.com/random?id=8" alt="">
  <img src="https://source.unsplash.com/random?id=9" alt="">
</div>
```

```css
.gallery{
  display:flex;
  flex-wrap:wrap;
  gap: .8rem;
  justify-content: center;
}

img{
  display:cover;
  width: 30%;
  height: auto;
}
```