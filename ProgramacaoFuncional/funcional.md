# Programação Funcional
É um paradigma de programação como a Orientação a Objetos, por exemplo. Está envolvido com funções.

Obs: Paradigma - Uma maneira de resolver problemas

**Funções**
- Pequenas tarefas dentro de uma função
- Abstrair um problema e isolar ele dentro da função
- Não modificar dados fora dela
- Pequenas e bem específicas no que fazem

**Características**
- Um **dado** (ou mais) **entra** em uma função e um **novo dado sai**
- Não altera dados
- Não guarda estado **stateless**

**Linguagens Funcionais**
- Javascript (multiparadigma)
- PHP (multiparadigma)
- Elixir
- Haskell

**Pontos Positivos**
- Fácil manutenção
- Fácil uso de testes
    - Funções isoladas e consistentes
- Códigos mais confiáveis

## Princípios

`Paradigmas`
* Programação Imperativa
* Programação Declarativa

`Dados`
* Imutalibidade
* Stateless

`Funções`
* Independentes
* Puras
* Higher-order
* First-class
* Composição

## Declaração Imperativa vs Declarativa

**Imperativa:** Paradigma, no qual o usuário deve especificar as ações e como elas devem ser executadas.

- O código é pensado e gerado em sequência;
- O código é pensado como um passo-a-passo, como uma receita de bolo;
- Uma coisa depende da outra;
- O estado de um dado é alterado constantemente causando mutações nas variáveis;
- Orientação a Objetos é um tipo de paradigma imperativo.
- Ex: Crie uma função de soma, por exemplo, e chame antes da declaração da função e após também.

**Declarativa:** Paradigma, no qual o usuário deve apenas declarar as ações.

- O código é gerado para fazer algo, não importa como
- O que fazer e não como fazer
- Não há necessidade de um passo a passo no código
- Programação Funcional é um tipo de paradigma declarativo
- Ex: Crie uma função de soma, por exemplo, e chame antes da declaração da função e após também.

```js
// Função que eleva o número ao quadrado
// Imperativo: Faça da seguinte forma
let number = 2
function square(){
    return number*number
}
number = square()

// Declarativa: O que fazer e não "como" fazer
const square = n => n*n
```

## Imutabilidade (const)

- Uma variável não vai variar;
- Se você precisar mudar uma variável, você não muda, você cria uma nova.
- Ex: Se você tem uma bola amarela e quer uma azul, você não pode pintar a amarela de azul, porque estaria mudando a sua essência e querendo ou não criando outra.

```js
// Exemplo em JS
const cart = { quantity:1, total:200 }
//bad
card.quantity = 3;
// good
const newCart = {...cart,quantity:3 }

// Exemplo em ReactJS
const [amount,setAmout] = useState(0)
//bad
amount = 2
// good
setAmout(2)
```

## Staleless

- Não guarda estado
- A função só conhece dados entegues a ela
- A resposta não poderá variar
- Contrário de stateless é statefull

```js
let number = 2;

// stateful function
function square(){
    return number * number
}

number = square();  // recursividade, após retornar um valor, esse mesmo será usado como parâmetro, logo a função não tem retorno fixo.

// stateless function
const square = n => n*n;  // retorno fixo
```

## Características das Funções

**Funções independentes**

- Deverá ter ao menos 1 argumento
- Deverá retornar algo
- Nada que acontecer lá dentro afeta o mundo externo 
    - dados imutáveis
    - não guardar estado
- Não faremos uso de loop (for,while), mas se houver necessidade de tal, usaremos recursão ( a função chama ela mesma)
- Ex: CallBack é um tipo de função dependente.

```js
const random = (number,Math) => Math.floor(Math.random() * number);

// recursive
// find the factorial of a number

const factorial = x => {
    // if number is 0 
    if(x === 0){
        return 1;
    }
    return x * factorial (x-1);
}
```

**Funções Puras**

- Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento 
- Não deverá sofrer nenhuma interferência do mundo externo a ela
- Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente
- Não terá nenhum efeito colateral no seu código
    - Não irá modificar nenhum dado
    - Não irá guardar nenhum estado

```js
// Função Impura
// Exemplo 1: Está dependendo de dado externo que não foi passado como parâmetro

function calculateCircumference(radius){
    return Math.PI * (radius + radius)
}

// Exemplo 2: Está alterando um dado externo

let person = {
    name: 'Rafael Camarda',
    age: 'jovem'
}

function changeName(name){
    person.name = name
}

// Função Pura
// Exemplo 1
function calculateCircumference(pi,radius){
    return pi * (radius + radius)
}
// com arrow function
const calculateCircumference = (pi,radius) => pi * (radius + radius)

// Exemplo 2
function changePersonName(person, name)({... person,name})
```

**First-class**

- Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções
- A função poderá ser entendida como uma variável

```js
const sayMyName = () => console.log('Samara')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))
```

**Higher-order**

- Funções que recebem funções como argumentos
- Funções que poderão retornar outras funções

```js

// Exemplo com .map()
const numbers = [2,4,8,16]
const square = n => n*n
const squareNumber = numbers.map(square)

// Exemplo de um retorno de função 
// (currying ou aplicação parcial de função)
// funções ocorrem de forma simultânea

const pause = wait => fn => setTimeout(fn,wait) // wait (parametro) e fn(retorno de função)
pause(600) (() => console.log('waiting 600ms'))
// pause(600) --> wait - parâmetro 
// () => ... --> Outra função que o seu retorno será o retorno da primeira função (pause)

const wait200 = pause(200) // registrei primeiro 
const wait1000 = pause(1000)

wait(200) (() => console.log('waiting 200ms')) // executando depois
wait(1000) (() => console.log('waiting 1s')) 

```

## Composição de Funções

- Um encadeamento de funções
- Uma função que retorna um dado e vai para outra função, que retorna um dado e vai para outra função, que retorna...

```js

const people = ['Rafa','Diego','Dani','Rod']
const upperCasePeopleThatStartsWithD = people.filter(person => person.startsWith('D')).map(dperson => dperson.toUpperCase())

```