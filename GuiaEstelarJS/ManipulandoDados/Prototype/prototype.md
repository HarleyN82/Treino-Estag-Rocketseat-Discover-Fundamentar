# Prototype

É uma série de recursos que já existem nativamente no JavaScript, no qual envolve diversos tipos de dados, que são lidos como objetos.

* Protótipo = Aquilo que foi criado antes
* protype-based language
* prototype chain
* _photo_

* Referência Externa: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects Object_prototypes

## Funcionalidade e Importância

Ele é um mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros, fornecido para os programadores, com o intuito de facilitar a manipulação dos dados (objetos). 

Quando criamos um dado/objeto ele possuirá automaticamente uma propriedade que pode ter valor "nulo", "undefined"..., e irá referenciar outro objeto geral, no qual já foi criado antes com propriedades já definidas. Então, o nosso objeto irá herdar todas as propriedades e métodos desse protótipo ascendente.

No caso, supondo que iremos criar uma função que vai percorrer todo um array, ao invés de criarmos um sistema para isso podemos apenar usar o método Map que já existe no sistema.

A maioria dos tipos de dados são encapsulados (protegidos/embrulhados) por objetos.

## Photo 

É o ponto de referência, no qual indica que existem mais protótipos a serem explorados.

Em JavaScript, é feito um link entre a instância do objeto e seu protótipo (sua propriedade __proto__, que é derivada da propriedade prototype no construtor), e as propriedades e os métodos são encontrados percorrendo a cadeia de protótipos.

Obs: O último "photo" é o objeto mais puro possível.

## Exemplo Prático

```js

    function Person(first, last,age,gender,interests) {

        // property and method definitions
        this.first = first;
        this.last = last;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    const person1 = new Person("Thomas","William",22,"male",['music','skiing']);

```

Se você digitar "person1." em seu console JavaScript, você deve ver o navegador tentar concluir automaticamente isso com os nomes de membros disponíveis neste objeto: 

- person1.png

Nesta lista, você verá os membros definidos no construtor de person1's constructor — Person() — name, age, gender, interests, bio, e greeting. No entanto, você também verá alguns outros membros — watch, valueOf, etc — estes estão definidos no objeto de protótipo do Person(), que é Object.

## hasOwnProperty

É uma função que existe no último passo da cadeia.

Quando criamos um dado ele é "embrulhado" em um objeto que na cadeia de protótipos irá conter o seu primeiro "proto". Caso, ele não tenha esse "hasOwnProperty", o seu ascendente terá.

Essa função é usada para saber se existe alguma propriedade que possa ser utilizada nele.

No exemplo acima não definimos nenhuma propriedade logo o valor é "false".

## Teste Prático do hasOwnProperty

```js

    let person = {
        "name": "Brian",
        "lastName": "Scott"
    };

    console.log( person.hasOwnProperty("name") );
    // true

```