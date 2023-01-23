# Options

Nesta aula falaremos sobre o método OPTIONS, que é um verbo HTTP que irá nos dar informações sobre a **disponibilidade de métodos da requisição**. Ele é um método seguro, pois não faz alteração alguma, e é idempotente, pois sempre retornará a mesma coisa para a mesma requisição, o OPTIONS não manda nem recebe um Body, não é usado em formulários e nem é cacheable.

Para analisar isso na prática coloque no terminal: `curl -X OPTIONS http://localhost:3000/posts -i`. O "-i" permite que eu tenha a visualização do cabeçalho.

```json

HTTP/1.1 204 No Content
X-Powered-By: Express
Vary: Origin, Access-Control-Request-Headers
Access-Control-Allow-Credentials: true
Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE // Foco da aula - Métodos Permitidos
Content-Length: 0
Date: Mon, 23 Jan 2023 20:10:32 GMT
Connection: keep-alive
Keep-Alive: timeout=5

```