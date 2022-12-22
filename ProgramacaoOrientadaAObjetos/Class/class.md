# Classes

Uma classe do JavaScript é um tipo de função. As classes são declaradas com a palavra-chave class. Vamos usar a sintaxe de expressão de função para inicializar uma função e a sintaxe de expressão de classe para inicializar uma classe.

As classes na orientação a objetos funcionam como um molde para os objetos. Os objetos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe.

Exemplo: Máquina de Biscoito 

Referências Externas: 
    - https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript-pt
    - https://www.w3schools.com/JS/js_class_intro.asp

## Estrutura 

- Iniciar com letra maiúscula
- Palavra chave "class"
- Nome da class
- Parâmetros pela função construtora
- Corpo da class

```js
    class MyClass{
        constructor(){
            // constructor body
        }
        // Class body
    }
```

## Herança

A relação de herança entre classes, logo a passagem de propriedades e métodos é feita a partir de dois termos:
    - extends
    - super() --> nomeClassPai.super()

Para adicionar propriedades/métodos diferentes do pai ao se conectar com a função pai você irá referenciar o novo elemento com `this` e depois defini-lo.

```js
    class Mage extends Hero {
        constructor(name,level,spell){
            // Chain constructor with super
            super(name,level);
            // Add a new property to the class
            this.spell = spell;
        }
    }
```

## Dicas

- A forma como uma classe é inicializada difere-se de uma função normal, visto que ela usa a função construtor.

- A definição de propriedades e métodos fora do escopo (prototype) não se conectará com a função extendidada, visto que está conectada apenas ao pai.

- Se o pai não estiver inicializado, então o filho tbm não estará, visto que os parâmetros do filho se conectam com os parâmetros do pai.