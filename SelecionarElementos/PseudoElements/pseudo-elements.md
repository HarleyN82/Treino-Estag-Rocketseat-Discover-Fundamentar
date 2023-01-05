# Pseudo-elements
Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS.

`::pseudo-element-name`

💻 Exemplos: Before
`::before` adiciona um pseudo-elemento antes do elemento selecionado.

```html
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
```

```css
li::before {
  content: "> "
}
```

💻 Exemplos: After
`::after` adiciona um pseudo-elemento depois do elemento selecionado.

```css

li{
    position: relative; /*O pai precisa ser relativo*/
}

li::after{
  /*content: ";"*/
  content: "";
  width: 10px;
  height: 10px;
  background-color: blue;
  position: absolute;
  bottom: 0;
}
```

Tanto para o ::before quanto para o ::after é preciso adicionar o content, mesmo que ele seja vazio content = "";

💻 Exemplos: First Line
`::first-line` pega a primeira linha de um texto.

```html
<article>
    <h3>Gratidão</h3>
    <p>Ser grato é ter recpnhecimento de que alguém o auxiliou de alguma forma. lorem lorem lorem lorem lorem lorem  lorem lorem  lorem lorem  lorem lorem  </p>
    <p>É quando você recebe ajuda, direta ou indiretamente, e consegue creditar na outra pessoa, o gesto de bondade.</p>
    <p>A gratidão deveria ser um sentimento nato, plantado, dentro de cada ser humano.</p>
</article>
```

```css
p:nth-of-type(2)::first-line {
	font-weight: bold;
}
```

## Referência
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements