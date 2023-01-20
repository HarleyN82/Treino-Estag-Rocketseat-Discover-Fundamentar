# EJS

É uma linguagem de modelagem para criações de páginas html utilizando javascript. Ou seja, podemos criar o nosso front com html dentro do node, sendo renderizado pelo JS.

* [] Criar o Html
* [] Passar para EJS (.ejs)

## Vantagens

- Desenvolver aplicações/serviços de forma fácil
- EJS usa JavaScript para renderizar HTML
- Muito fácil de fazer debugging
- Amorzinho
- Instalar ejs
    - `npm install ejs`
- Ferramenta Extra para criar um servidor
    - `npm install express`
- Sintaxe simples

## Analisando Error

Como não tinha a pasta "view", então o site não identificou o contéudo do arquivo, mas sabia que ele estava ali.

## Comando EJS

Através desse formato com <%- %> estamos informando que dentro dessa tag terá um comando ejs. No caso, colocamos o "include" para incluir aquela rota no site.

## Passando Objetos em EJS

Ao utilizar a sintaxe do EJS eu posso passar objetos e os renderizar na própria página chamando seus valores de maneira simples e prática.

```js
// No página about
<%- include('../partials/header', {pagina:'about'}); %>

// No header
<p>Página: <%- pagina %></p>

```

❕ Detalhe: Não coloquei essa chamada e configuração no index, porque eu não quero, mas ao mesmo tempo eu quero que o EJS saiba que quando não tiver falando nada se refere a página "home". Para isso, fizemos a seguite condicional ternária:

```js
// No página index
<%- include('../partials/header'); %>

// No header
<p>Página: <%= typeof pagina != 'undefined' ? pagina: 'Home'%></p>

```

<!--Fonte: Ligature -->

## ForEach

O que é JS coloca-se com <% %>
Se for para receber valores dentro de variáveis coloca <%= %>

```js
<main>  
    <ul class="pt-3">
        <% qualitys.forEach(function(quality){ %>
            <li>
                <strong><%= quality.title %></strong> <%= quality.message %>
            </li>
        <% }) %>
    </ul>
</main>
```

❕ Quando mexe com arquivo js precisa renderizar de novo o arquivo server.

## Referências

- https://getbootstrap.com/docs/5.0/utilities/flex/
- https://getbootstrap.com/docs/5.0/utilities/spacing/
- https://getbootstrap.com/docs/5.1/components/buttons/
- https://getbootstrap.com/docs/5.0/utilities/text/
- https://www.cedrotech.com/blog/tutorial-de-conexao-entre-sass-e-html/#:~:text=O%20Sass%20traz%20duas%20sintaxes%20diferentes%3A%20Sass%20e,simples%2C%20e%20%C3%A9%20descrita%20no%20tutorial%20a%20seguir%3A
- https://www.w3schools.com/bootstrap5/bootstrap_typography.php#:~:text=Bootstrap%205%20Default%20Settings%20Bootstrap%205%20uses%20a,margin-top%3A%200%20and%20margin-bottom%3A%201rem%20%2816px%20by%20default%29.
- https://stackoverflow.com/questions/63141494/how-to-create-jumbotron-in-bootstrap-5