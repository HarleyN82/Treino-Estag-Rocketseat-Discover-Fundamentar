# GET

Nesta aula falaremos sobre o método GET, que serve para pegar um recurso, ou seja, só pode receber dados. Ele é um método seguro e idempotente, que não pode enviar um Body no request, mas pode receber no response, ele também pode ser cacheable e é usado em alguns formulários.

## Para executar é só usar o CURL

Terminal: `curl http://localhost:3000/posts` com ou sem o (v)
Response: `GET /posts 200 41.326 ms - 77`

Um outro caminho que podemos fazer é: `curl -v http://localhost:3000/posts\?q\=json`
Response: `GET /posts?q=json 200 32.193 ms - 77`
O que fizemos foi um filtro da resposta.

* Usamos o contra barra \ para veriguar que esse simbolo seja para endereçar e não outra coisa.