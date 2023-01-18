# NodeJS

É um ambiente para execução de código JS, ou seja, ele empacota (dentro do NPM) tudo que é necessário para executar e interpretar o JS, em paralelo com o V8 (interpretador JS do brownser). 

Dessa forma, com o seu carácter interpretativo podemos executar aplicações JS tanto no navegador quanto fora dele.

**Utilitários desenvolvidos em Node:**  

- Webpack
- Gulp
- Grunt
- NPM

## Onde utilizá-lo ?

A sua utilização é mais vista em aplicações web, mas pode ir além sendo usado em linhas de comando como CLI, aplicações desktop, mobile, Machine Learning e entre outros. Toda essa engenharia acontece por causa do V8.

## Máquina Virtual V8 (do google)

É um motor de interpretação JS desenvolvido pelo Google e é usado no navegador Chrome.

- Compila (traduzir para uso) o código JS para o formato nativo de máquina antes de executá-lo. Ou seja, ele pega algo em alto nível e coloca para baixo nível.
- Acelera a execução à nível de código binário;
- Diversificou o uso do JS, permitindo seu uso no front-end e no back-end como as empresas Netflix e Paypal fizeram.

## Características

> Node é single-threaded, non-blocking e asynchronous.

Node, usando a linguagem de programação JS é popular por ter uma cultura non-blocking, ou seja, não bloqueante baseada em eventos.

**Arquitetura do JS**

- `CallStack:` Responsável por empilhar as chamadas de funções;
    - Ex: Pela nossa lógica, o primeiro a ser executado seria o "a", porque ele veio primeiro na construção. De fato, o retorno da função A será o primeiro a vir, mas porque na pilha de chamadas, chamamos a função B que, por sua vez, está chamando o A antes do seu próprio retorno. Então, caso eu inverta o resultado será diferente.

    Pilha de Chamadas:

    - console.log('a') // last in last out
    - function a()
    - console.log('b')
    - function b()
    - global
    
    ```js 
    function a(){
        console.log('a')
        return
    }

    function b(){
        a() // poderia vir após o console
        console.log('b')
        return
    }

    b()
    ```

- `CallBack Queue:` Responsável por enfileirar os callbacks (funções assíncronas).
    - Seria o Worked Thread;
    - Ex: Quando temos que executar uma função e após um click ou alguns segundos executar outra. Esses eventos que dependem de algo externo (assíncrono) serão enviados para uma fila de chamada e o primeiro a terminar o evento será executado (FIFO - First In First Out).

    ```js
    console.log("Antes da Callback Queue");
    // exibirá no console após 1s
    setTimeout(() => {console.log('callback queue')},1000)
    ```

- `Event Loop`: Responsável por verificar continuamente se algum evento assíncrono foi disparado executando sua respectiva callback.
    - Ex: Restaurante:
            - Cliente novo chega;
            - Garçon vai até lá e anota o pedido;
            - Garçon leva o pedido para a cozinha para o chef;
            - O cliente fica esperando e o garçon atende outras pessoas;
            - Chef fez o pedido, o garçon pega e dá pro cliente.
            - Esse fluxo ocorrerá sempre.
    - O exemplo do restaurante é usado para representar uma aplicação web que devolverá uma informação simples de um banco de dados.
        - Restaurante: Aplicação Web
        - Cozinha: Processo de regras de negócio para acessar o banco de dados
        - Garçon: Single Thread
        - Cliente: Usuário
        - Pedido: Request
        - Espera do CLiente: Worked Thread/CallBack Queue
        - Quando o usuário acessa o site o backend precisa processar as regras de negócio (banco de dados) e devolver o resultado. Nesse caso, chamaremos uma função assíncrona passando uma callack com o que queremos que ela faça após terminar. Ela, por sua vez, estará no CallBack Queue. Quando ela finalizar o evento será disparado. E o event loop pegará esse event do callback queue e enviará para o callstack.
    - Toda essa arquitetura é feita para não travar a aplicação,enquanto a regra de negócio é processada.
    - Esse fluxo representa uma arquitetura não-bloqueante de thread única. (O que o node faz).

**Arquitetura das Linguagens Convencionais**

Linguagens como PHP,Ruby,Asp.net não possuem esse padrão de comportamento de single-thread, sendo eles multithreads (a cada nova requisição se cria uma nova thread). Eles não conseguem atender mais de uma requisição por vez. 

No exemplo acima, seria como o garçon ficar parado (tempo ocioso) esperando a resposta da cozinha.

## Vantagens e Desvantagens

Com isso, o uso ideal do node é para I/O intensos como, Streamings, servidores web, chats e comunicação de rede no geral.

Empresas que usam Node:

- Netflix
- Paypal
- Uber
- Wallmart

`Node é uma excelente ferramenta para FullStack JavaScript Developers`

## Referências

- https://www.geeksforgeeks.org/what-is-the-call-stack-in-javascript/
- https://medium.com/@imkarthikeyans/javascript-call-stack-event-loop-and-callback-queue-e18072550f3