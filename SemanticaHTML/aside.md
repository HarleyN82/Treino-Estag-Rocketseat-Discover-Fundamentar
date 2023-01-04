# Aside

A tag aside é para conteúdos levemente relacionados ao conteúdo principal, como explicações do conteúdo, glossários, links extras, biografia do autor, informações de perfil e etc.

É uma tag fácil de se entender, porém fácil de se confundir, então evite atribuir a tag aside ao lado da página conforme você for aprendendo mais sobre HTML, CSS.

```html

<body>

    <header>
        <div>
            <strong>Construtores & Cia.</strong>
            <span>Um portal de cosntrução</span>
        </div>
        <nav>
            <ul>
                <li>Homepage</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h1>Como construir uma casa</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni consequatur quaerat adipisci neque, eum nihil illum culpa, distinctio sunt repellendus dolores excepturi voluptas. Quasi officiis, mollitia possimus iure fugiat dolorum.</p>
            <ul>
                <li>1km</li>
                <li>20km</li>
                <li>234km</li>
            </ul>
        </article>  

        <!--Glossário-->

        <aside>
            <h3>Glossário</h3>
            <dl>
                <dt>Terraplanagem</dt>
                <dd>Signficaodoooooooooo</dd>
            </dl>
        </aside>
    
    </main>

    <footer>rodapé</footer>
</body>

```