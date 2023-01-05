# Combinators
Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização.

## Descendant combinator

Identificado por um espaço entre os seletores.
Busca um elemento dentro de outro, mesmo que existam outros elementos no caminho.

```html
<body>
	<article>
		<h2>Um Título</h2>
	</article>
</body>
```

```css
body article h2 {
	color: red;
}
```

## Child combinator

Identificado pelo sinal > entre dois seletores
seleciona somente o elemento que é filho direto do pai
Elementos depois do filho direto serão desconsiderados

```html
<body>
  <ul>
    <li>Item 1</li>
    <ul>
      <li>Item 2</li>
    </ul>
  </ul>
</body>
```

```css
body > ul > li {
	color: blue;
}
```

## Adjacent sibling combinator

Identificado pelo sinal + entre dois seletores
Seleciona somente o elemento do lado direito que é irmão direto na hierarquia

```html
<h1>
  Título
</h1>
<p>
  Esse é um parágrafo
</p>
<p>
  Mais um parágrafo
</p>
<button>Um botão</button>
<button>Outro Click</button>
```

```css
h1 + p {
	color: red;
}
button + button{
    margin-left:32px;
}
```

## General sibling combinator

Identificado pelo sinal ~ entre dois seletores
Seleciona `todos` os elementos irmãos

```html
<h1>
  Título
</h1>
<p>
  Esse é um parágrafo
</p>
<p>
  Mais um parágrafo
</p>
<button>Um botão</button>
<p>Outro parágrafo</p>
```

```css
h1 ~ p {
	color: red;
}
```

## Utilizando combinadores

```html
<ul>
  <li>Alooo</li>
  <li class="red">Hey</li>
</ul>
```

```css
ul > li[class="red"] {
	color: red;
}
```

Dica:
Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização.
Muitas vezes, um simples uso de classes, torna o trabalho mais eficiente.

```css
.red {
	color: red;
}
```


<!--
Tags vs Elementos: https://tableless.github.io/iniciantes/manual/html/oquetags.html
->