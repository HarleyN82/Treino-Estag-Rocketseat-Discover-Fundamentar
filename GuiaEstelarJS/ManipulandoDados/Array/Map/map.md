# Método Map

* Manipula dados de um array o percorrendo e retornando algo específico
* Alternativa para métodos de repetição
* Referência Externa: https://kenzie.com.br/blog/map-javascript/

## Estrutura

                    `array.map(callback,thisArg)`

- Callback é um parâmetro, no qual recebe o valor do elemento atual do array, a sua posição e o próprio array original.
- ThisArg é um parâmetro opcional, no qual funcionará como "this" no callback.
- Final: array.map((elemento,index,array) => {}, thisArg)

## Exemplo Prático

```js
    const array = [1,2,3,4,5];

    const novoArray = arry.map((elemento) => {
        return elemento * 2;
    })

    console.log(novoArray);
```

Sabemos que o método map retorna um novo array, sem alterar os dados do array original. Devido a isso, precisamos criar uma constante para armazenar esse valor. No nosso exemplo, criamos a constante novoArray e fizemos um map, passando como parâmetro os elementos do array original, onde todos esses elementos serão percorridos e multiplicados por dois.