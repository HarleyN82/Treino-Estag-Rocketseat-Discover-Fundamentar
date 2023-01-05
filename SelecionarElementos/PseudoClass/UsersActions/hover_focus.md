# hover e focus

`:hover`
Algumas estilos só são aplicados quando o usuário faz alguma ação na página.

```html
<a href='#'>Clique aqui</a>
```

```css
a:hover {
  color: red;
}
```

Vai mudar a cor do link para vermelho quando o usuário passar o mouse sobre o link

`:focus ` é aplicado quando o elemento recebe o foco da ação do usuário que pode ser feita utilizando o teclado ou clicando no elemento com o mouse. É comumente usado em campos de input como uma forma de mostrar qual o input "ativo".

```css
input:focus {
  border-color: red;
  outline: none;
}
```