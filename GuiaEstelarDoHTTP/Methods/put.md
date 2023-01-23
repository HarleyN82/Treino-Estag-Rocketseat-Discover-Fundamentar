# PUT

Nessa aula falaremos sobre o método PUT, que serve para `criar ou atualizar um recurso`, porém, diferentemente do POST é idempotente e normalmente usado para atualizar recursos. 

❗ O status code de criação do PUT é 201, e o de atualização é o 204 ou 200.

O verbo PUT não é seguro, pois altera dados no servidor, mas é idempotente, tem Body na requisição mas não na resposta e não é usado em formulários nem é cacheable.

- Terminal: `curl -d '{"name":"Samara Silvia"}' -H "Content-Type: application/json" -X PUT http://localhost:3000/profile`

- Response: `PUT /profile 200 80.083 ms - 29`


## Antes da atualização

"profile": {
    "name": "typicode"
  }

## Depois da Atualização

"profile": {
    "name": "Samara Silvia"
}