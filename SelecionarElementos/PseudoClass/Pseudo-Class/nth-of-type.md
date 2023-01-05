# nth-of-type()

Pega o elemento por tipo e posição

```html
<article>
    <h3>Gratidão</h3>
    <p>Ser grato é ter recpnhecimento de que alguém o auxiliou de alguma forma.</p>
    <p>É quando você recebe ajuda, direta ou indiretamente, e consegue creditar na outra pessoa, o gesto de bondade.</p>
    <p>A gratidão deveria ser um sentimento nato, plantado, dentro de cada ser humano.</p>
</article>
```

```css
article p:nth-of-type(1) {  /*Pegue dos tipos "p" o primeiro item*/
  font-weight: bold;
}
```