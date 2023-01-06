# nth-child

Seleciona algum elemento a depender da posição de um grupo de irmãos (elementos diretamente ligados)

```html
<article>
    <h3>Gratidão</h3>
    <p>Ser grato é ter recpnhecimento de que alguém o auxiliou de alguma forma.</p>
    <p>É quando você recebe ajuda, direta ou indiretamente, e consegue creditar na outra pessoa, o gesto de bondade.</p>
    <p>A gratidão deveria ser um sentimento nato, plantado, dentro de cada ser humano.</p>
</article>
```

```css
article p:nth-child(2) {
  font-weight: bold;
  font-size:18px;
  color: red;
}
/*Para selecionar o primeiro filho dos "p" do pai article é preciso considerar que "p" não é o primeiro item, então conta-se ele de 2 em diante.*/
```