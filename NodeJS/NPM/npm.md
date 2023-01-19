# NPM

Node Package Manager

__Glossary: Dependencies, Packages, Modules__

- [ ] Verificar se temos o npm instalado `npm -v`
- [ ] Criar nosso próprio pacote
- [ ] O que é o arquivo package.json
- [ ] Utilizar módulos de terceiros
- [ ] O que é diretório node_modules
- [ ] O que é o arquivo package-lock.json
- [ ] Criar scripts para rodar com o npm

## Iniciando um pacote com NPM

- Coloque no terminal `npm init` para iniciar o processo de ciração do seu pacote.
- Responda as perguntas seguintes como nome do pacote, sua descrição e afins.

❕ `npm init -y` você vai criar o seu pacote colocando "sim" para tudo. Ou seja, virá tudo automaticamente.

## Package.Json

É um arquivo no formato de texto JSON (JavaScript Object Notation). Ou seja, abri-se um objeto JS e coloca suas chaves sempre com "" e : depois, e seu valor.

```js
{
  "name": "pacote-npm",
  "version": "1.0.0",
  "description": "aprendendo node",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "learning",
    "nodejs"
  ],
  "author": "Samara Silvia",
  "license": "MIT"
}
```

Esse formato de texto é baseado em um texto padrão para representar dados estruturados com base na sintaxe do objeto JavaScript.

## Instalando Dependências

O comando `npm install` irá instalar qualquer módulo que está no repositório do npm. 

Por exemplo, `npm install cfonts`.

Com isso, ele irá instalar e adicionar as dependências no "package.json". Além de, ter criado um "diretório" e um "package-lock.json".

❕ `npm i` é um atalho para install.

## Dependências de desenvolvimento e atualização

`npm i cfonts -D` configura a instalação como sendo apenas usado em um ambiente de desenvolvimento, alterando o package.json.

```js
{
  "dependencies": {  //devDependencies
    "cfonts": "^3.1.1"
    "inquirer": "^9.1.4"
  }
}
```

Podemos também manipular o package.json colocando todas as dependencias baixadas em uma área só e depois rodar `npm update` para que se possa atualizar no package-lock.

## O que é diretório node_modules

Cada módulo vai chamando o outro, mesmo que não tenhamos baixado.

Não se envia ele para o repositório. A gente até cria um arquivo chamado ".gitignore" e colcoa dentro dele o nome do arquivo a ser ignorado, porque podemos ter esse arquivo só com `npm i`. Isso porque, no nossso "package.json" temos tudo o que precisamos.

## Package-lock.json

Ele é um arquivo no formato Json como o outro, mas diferentemente do outro não podemos mexer e ele faz o mapeamento de todas os módulos.

## Criando e rodando scripts

Rode no terminal `npm run test`, tendo como resposta o mesmo que está dentro do "package.json". Usamos "test", porque é o nome da chave que está no pacote. Mas podemos mudar o nome da chave para qualquer outro que quisermos e depois substituir o "test" por esse nome.

Além disso, podemos mudar o conteúdo pedindo para rodar no node algum documento.

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

## Instalando dependências globais

Para instalar módulos de maneira global é só rodar `npm i opn -g`. Para saber onde está instalado é só rodar `npm root -g`.

Para desinstá-lo é só rodar `npm unistall opn -g`

## Gerenciando versões das dependênicas

Para mudar de versão dos pacotes instalados rode `npm i moment`

```JS
"moment": "^2.29.4"

// major.minor.patch - ordem dos números
// patch - Está resolvendo algum bug
// major - É a versão do projeto
// minor - Está resolvendo alterações, mas não tem possibilidades de quebrar

// * - atualizou tudo
// ^ - npm atualizado irá atualizar o minor.patch
// ~ - atualizará só o patch
// sem nada na frente = versão fixa
```

É recomendado não atualizar o package.json, porque pode ser perigoso e prejudicar o projeto.

Para vê as atualizações disponíveis para eu mudar é só rodar `npm outdated`. Ao vê as possibilidade é só rodar `npm upgrade` mudando a versão para todos.

Para voltar para a minha versão antiga é só rodar `npm i moment@latest`.

## Removendo pacotes
Rodando `npm uninstall moment` vamos desinstalar esse pacote.