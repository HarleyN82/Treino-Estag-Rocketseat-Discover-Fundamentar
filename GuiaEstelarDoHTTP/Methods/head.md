# HEAD

Nesta aula falaremos sobre o método HEAD, que é semelhante ao GET, porém é recebido somente o cabeçalho. Ele é um método seguro e idempotente, não tem Body nem no envio nem na resposta, não é usado em formulários e é cacheable. (Isso porque, colocamos o I maiúsculo)

- Terminal: `curl -I http://localhost:3000/posts`
- Response: `HEAD /posts 200 13.638 ms - 77`