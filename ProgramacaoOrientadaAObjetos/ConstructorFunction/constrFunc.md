# Funções Construtoras

São funções que servem para criar objetos de forma não literal, com o intuito de tornar o seu código mais simples e reutilizável.

Elas são apenas uma das formas de criar objetos, podendo também usar as classes construtoras que literalmente é uma classe que vai ter um construtor dentro, então quando for usar já terá um modelo de exibição pronto.

Referência Externa: https://edrodrigues.com.br/blog/introducao-as-funcoes-do-construtor-javascript/

## Estrutura

- Iniciar com letra maiúscula/minúsucla (opcional)
- Palavra chave "function"
- Nome da função construtora
- Parâmetros para o construtor(opcional)
- Corpo da função construtora

```js
    function myConstructorFunc(param){
        // Function Constructor body
    }
```

## This

Dentro dessas funções para a definição de _propriedades_ deve-se utilizar o termo `this` e não `let,var` ou `const`, visto que remetem a variáveis.

O this tem duas funcionalidades:
    - Referir a própria função quando estiver dentro dela;
    - Referir o próprio objeto, pegando os dados dentro do construtor, mas dessa vez o termo será mascarado pelo próprio nome do objeto.

Importante! O this faz referência ao objeto que vai ser instânciado.

```js

    function Car(model){
        this.model = model;  // Mesmo que: Car.model...
    }

    let car = new Car('toyota')
    car.model // Mesmo que: this.model

```

## New

O processo de criação de um objeto é chamado de instância e para tal é preciso apenar definir uma variável e atribuir a ela a palavra-chave `new` e o nome da função com os argumentos, caso a própria tenha seus parâmetros.

```js

    let car = new Car('toyota','red')
    car.model // toyota

```

## Herança

A relação de herança entre funções construtoras, logo a passagem de propriedades e métodos é feita a partir de um termo:
    - call() --> nomeClassPai.call()

Para adicionar propriedades/métodos diferentes do pai ao se conectar com a função pai você irá referenciar o novo elemento com `this` e depois defini-lo.

```js
    function Mage(name,level,spell){
        Hero.call(this,name,level);  // conexão com o pai
        this.spell = spell; // adição de nova propriedade
    }
```

## Definição de Propriedades e Métodos 

_Fora do Construtor_

Para isso, é preciso usar o _prototype_ que é um objeto que contém todas as propriedades e métodos definidos em uma função construtora.

Esta propriedade aponta para o construtor com o qual você está trabalhando no momento. O uso dessa propriedade permite adicionar propriedades e métodos para construtor, alterá-los ou removê-los.

```js
    Car.prototype.speed = 50
    let car = new Car('toyota','red')
    car.speed // 50
```

_Para objetos construtores_

Embora que, o prototype seja uma boa opção ele é genérico, logo todo e qualquer objeto também terá aquelas determinadas propriedades/métodos. Assim, dessa segunda forma apenas o objeto em questão terá essa nova propriedade ou método.

Para a elaboração é simples, você só precisa referênciar o objeto + (.) + nomeDaPropriedade/Método.

```js
    let car = new Car('toyota')
    car.speed = 50 // 50
```