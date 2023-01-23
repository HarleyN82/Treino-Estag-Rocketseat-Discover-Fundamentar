# HyperText Transfer Protocol
Protocolo de Transferência de HyperTexto

* Protocolo é um conjunto de regras
* HyperTexto é uma forma de intertextualidade que faz a fusão de diversos recursos midiáticos como vídeos, textos, áudio...

## Visão Geral

- Permite troca de informações e dados na internet
- Uma troca de mensagens (faço o pedido e obtenho uma resposta)
- HTML, CSS, Scripts, Imagens, Vídeo
- Uma chamada para cada um desses recursos

## Visualizando a comunicação 

No protocolo HTTP tudo funciona com pedidos e respostas, que são chamados em inglês como Request e Response, mandando mensagens nos dois casos. 

`Conexão`

Browser  -- request --> Servidor 
        <-- response --         

* Tudo isso é feito por meio de messages.

`Messages`

No caso das mensagens de pedidos, você precisa de um verbo HTTP, que chamamos de método, que vai definir o tipo de pedido que está sendo feito, por exemplo o método GET, vindo do inglês para "pegar", pega um recurso, como um URL para algum local da internet, ou o método POST, que serve para criar um recurso. 

* Recurso é o local onde vai ser enviado o pedido. Ou seja, onde estará o que queremos. Seria o endereço (url).

Depois do pedido, a resposta traz um Status Code do servidor, que é um código sobre o estado do seu pedido, entre esses códigos, estão 200, onde tudo deu certo e sua página foi enviada, 404, onde o servidor não conseguiu encontrar o pedido, 301, que é um redirecionamento para outro local, entre outros além do Status Code, o servidor pode mandar um header e um body. 

Existem coisas que podem estar tanto na Request quanto na Response, que são o header e o body, os Headers são campos informativos, e o body contém conteúdo, podendo ser em forma de HTML ou JSON.

## Visualizando pelo DevTools

Nesta aula vamos aprender um pouco mais sobre HTTP usando a ferramenta DevTools, mais especificamente a aba "Network", inglês para "Rede". Com a aba aberta, podemos entrar em um site, por exemplo o Google, e iremos ver diversas informações aparecendo, se clicarmos na primeira dessas informações podemos ver algumas das informações sobre o pedido e a resposta. Também pode-se ver, que o navegador faz um pedido para cada link, midia, entre outros, e cada pedido tem sua resposta.

## Visualizando com Curl

Por mais que já possamos visualizar algumas informações com o DevTools, precisamos de alguns detalhes a mais para trabalhar, então usaremos uma ferramenta extra chamada cURL, que já vem instalada em sistemas baseados em UNIX, e no Windows nós aconselhamos a usar a ferramenta Git Bash, que também vem com ela. Usando o cURL podemos entender alguns conceitos, primeiramente temos que saber que o cURL está fazendo o papel do cliente, ao invés do navegador, com a ferramenta, também conseguimos ver o corpo da resposta, o que não era possível com o DevTools, e para também pegar os headers com o cURL, podemos adicionar -i ao comando antes do link, com o parâmetro -v podemos ver todos os headers, tanto os de saída quanto de chegada.

```js
Usuario@DESKTOP-US7DAEI MINGW64 ~/Desktop/Treino-Estag-Rocketseat-Discover-Fundamentar/GuiaEstelarDoHTTP (main)
$ curl https://google.com
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="https://www.google.com/">here</A>.
</BODY></HTML>
```

Pegando HEADERS pelo curl

```js

$ curl -i https://google.com
HTTP/2 301
location: https://www.google.com/
content-type: text/html; charset=UTF-8
cross-origin-opener-policy-report-only: same-origin-allow-popups; report-to="gws"
report-to: {"group":"gws","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/gws/other"}]}
date: Mon, 23 Jan 2023 18:29:00 GMT
expires: Wed, 22 Feb 2023 18:29:00 GMT
cache-control: public, max-age=2592000
server: gws
content-length: 220
x-xss-protection: 0
x-frame-options: SAMEORIGIN
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"

<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="https://www.google.com/">here</A>.
</BODY></HTML>

```