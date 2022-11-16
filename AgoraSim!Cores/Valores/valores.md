## Valores

Podemos definir os valores por

* palavra-chave (blue,transparent)
* hexadecimal (#089)
* funções: rbg,rgba,hsl,hsla

```css
element{

    /* Keyword values */
    color:currentcolor; /* Cor do Contexto */

    /* <named-color> values */
    color:red;
    color:orange;
    color:tan;
    color:rebeccapurple;

    /* <hex-color> values 0-F */
    color: #090; /* Red Green Blue*/
    color: #009900;
    color: #090a;
    color: #009900aa; /* letras (alfa) atua com a transparência das cores */

    /*<rgb()> values */
    color: rgb(34, 12, 64, 0.6);  /* 0-255 : preto-maiorincidenciadacor */
    color: rgba(34, 12, 64, 0.6);

    /* <hsl() values */
    color: hsl(180, 100%, 50%, 60%)  /* HSL → Hue - Saturation - Lightness/Luminance */
    color: hsla(180, 100%, 50%, 60%) /*O quarto elemento é a transparência*/

    /* Global values */
    color: inherit; /* Herda a cor do elemento anterior */
    color: initial; /* Volta a sua cor inicial */
    color: unset; /* Não defino cor, então ele pega a cor do contexto */
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/color_value