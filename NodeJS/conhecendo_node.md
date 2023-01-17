# O que é NodeJS ?

Node JS é um JS Runtime Envioment (Ambiente de execução JS).

Software --> Hardware
// Conversam entre si de forma simultânea

Software: Sistemas Operacionais, programas, linhas de código... abstratos....
Hardware: Computador, CPU...físico...

Runtime Environment: Funciona como um mini S.O que se comunica com o JS, logo tudo o que tem dentro dele funciona de forma separada do que está externo a ele.

Ele não é um framework como React,Vue,Angular..., ou seja, um conjunto de regras e estratégias aplicadas a algum tipo de "pacote". Cada um tem uma opinião e jeito de ser diferentes. E como ele usa a linguagem JS, então ele não pode ser uma também.

## Para que serve o NodeJS ? 

É uma ferramenta usada na linguagem de programação JavaScript para depurar soluções tecnológicas no backend, frontend e micro serviços. Além de, ser usada para construir API que será consumida por webApp, Mobile e Desktop. Não deixando de fora scripts e automação, machine learning e I.A.

> API é um local onde disponibilizamos dados, nos quais outros front-end os consumam. A ideia é feita no back-end e a partir disso o front-end vem consumindo recursos.

⚠ Se precisar de muito processamento, ou seja, CPU, não é recomendado usar Node. Ex: Em processamentos fortes de vídeos e fotos.

## Vantagens

- Rápido 
    - Execução
    - Prototipar
- Alta escalabilidade
- Aplicações de ponta
- JS everywhere
- Ecossistema gigante
- Casos de Uso
    - Netflix: Java no backend e JS no frontend, mas virão que estavam fazendo o mesmo trabalho em dobro (tratamento de erros, atividades, debugger, etc). Então, ao substituir tudo por JS ajudou muito em tempo e produtividade.
    - Paypal
    - https://www.simform.com/nodejs-use-case/

## V8 

É um motor que compõem o ambiente, a máquina virtual, que irá rodar o JS na máquina.

- Interpretador de JS para linguagem de máquina
    - Máquina -- Assembly -- C++ -- V8
- Criado em C++
- Baseado nas últimas features do JS
- Focado para Chrome mas tem todo o cuidado de não quebrar o Node
- Não possui a DOM, console ou File System

```js
function run(){
    return 'hello';
}
```

## Como funciona o NodeJS?

O NodeJS funciona de forma assíncrona, tendo um único fluxo de processo (thread) que não pode ser bloqueado. Dessa forma, pode-se haver várias requições para vários usuários ao mesmo tempo.

**Ilustração**

Imagine uma batalha entre 2 restaurantes...
Qual terá o melhor atendimento?

- Restaurante do Apache
**Diferencial:** Cada cliente tem seu próprio garçon
    - Um cliente vai fazer o pedido de uma pizza
        - Pega o pedido e leva até a cozinha, para o chef preparar
        - O chefe, por regra do restaurante, irá proibir e bloquear o garçon de voltar para o cliente, até que o pedido fique pronto
        - O cliente queria muito fazer mais pedidos, mas não pode, pois o garçon está bloqueado
        - Após o pedido ficar pronto, o garçon leva de volta para o cliente
    - O cliente foi embora e por regra do restaurante, o garçon é despedido

🔸 Supondo que chegue 100 clientes numa noite, o gerente precisaria contratar mais garçons.

- Restaurante do Noderson
**Diferencial:** O garçon de nome Eveneto Lupin
    - Mesa 01: Um cliente vai fazer o pedido de uma pizza
        - Eveneto Lupín pega o pedido e leva para o chef
        - Volta com gosto de gás para a próxima mesa
    - Mesa 02: O cliente faz o pedido de uma salada
        - Eveneto Lupin já egou o pedido e levou para o chef
    - O chef tocou um sininho avisando que o pedido da mesa 1 já ficou pronto e Eveneto corre para pegar e fazer a entrega do pedido

🔸 O segredo de Eveneto é que ele sabe trabalhar de maneira assíncrona (multitarefas), fazendo mais de 1 evento de cada vez e não tem nada que o bloqueie. Ele é muito solicitado e faz seu trabalho muito bem feito.

**Decifrando**

Tio Apache = Apache
Noderson = Node
Cliente = Usuário
Pedido = Request
Garçon = Thread
Cozinha = Servidor
Chef = Banco de Dados
Eveneto Lupin = Event Loop´

> Node é single-threaded, non-blocking e asynchronous.


## Avançando no Entendimento

