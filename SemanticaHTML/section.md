# Section

A tag section serve para colocarmos seções na nossa página HTML, e uma dica de ouro: Geralmente se coloca um título e conteúdo na tag section. Antigamente usava-se uma div para fazer essas divisões e seções de conteúdos, mas semanticamente é mais apropriado usar uma tag section. Exemplo de uso a seguir:

```html
<main>
    <h1>Receita 1</h1>
    <p>descrição da receita</p>

    <section>
        <h2> Modo de preparo</h2>
        <p>Modo de preparo</p>
    </section>
</main>
```

Caso você queira fazer duas sections som noções parecidas como "receita 1" ou "receita 2" é melhor colocarum <article>.

A tag section pode ser usada dentro de um article, e não possui atributos específicos, somente os globais.