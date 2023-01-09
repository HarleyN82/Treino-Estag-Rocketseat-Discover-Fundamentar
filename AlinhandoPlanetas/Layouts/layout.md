# Layouts e evolução
Layout tem a ver com a maneira que os elementos estão distribuídos na tela

## Normal Flow

Ou Flow Layout é a maniera que os elementos `block` e `inline` ficam na página

```html
<p>Texto block com <strong>inline</strong> dentro</p>
<div style="background:blueviolet">Outro  texto</div>
```

## Tables

É a maneira de tables onde a tag `table` recebe um display `table` fazendo com que os elementos internos como `td` e `tr` possam ser usados para montar uma tabela. (forma como iremos distribuir elementos e dados)

Obs: Display é um dispositivo para a apresentação de informação, de modo visual e/ou táctil, adquirida, armazenada ou transmitida sob várias formas.

```html
<table>
    <tr>
        <td>Hora</td>
        <td>20:00</td>
    </tr>
     <tr>
        <td>Hora</td>
        <td>20:37</td>
    </tr>
</table>
```

## Tabless

Uso das propriedades `float`, `clear` para que os elementos possam mudar de posição na tela. (forma como iremos distribuir elementos e dados).

```html
<div>esquerda</div>
<div>direita</div>
<div>normal flow</div>

<p><img src="https://th.bing.com/th/id/OIP.1zHbx8QL6Vv0Y9bAjKR0KQHaEo?w=296&h=184&c=7&r=0&o=5&pid=1.7" alt="Pineapple" style="width:200px;height:170px;margin-left:15px;"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.</p>
```

```css
div:nth-of-type(1){
    float:left;
}
div:nth-of-type(2){
    float:right;
}
div:nth-of-type(3){
    clear:both; /*Anula a ação do float */
}
img {
  float: right;
}
p {
  text-align:justify;
}
```

Link: https://www.w3schools.com/Css/css_float.asp


## FlexBox

A caixa se torna flex (uma caixa dentro de outra caixa), fazendo com que os elementos internos possam receber melhor:

- Alinhamento
- Ordenação
- Tamanhos Flexíveis

```html
<div class="flexbox">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>
```

```css
.flexbox{
  display:flex;
  justify-content:space-around;
  flex-direction:column;
}
.item:nth-child(1){
  order:2;
}
.item:nth-child(2){
  order:1;
}
.item:nth-child(3){
  order:3;
}
```

Obs: https://www.w3schools.com/cssref/css3_pr_order.php