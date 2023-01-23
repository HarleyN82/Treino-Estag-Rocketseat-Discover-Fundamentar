# PATCH

Nesta aula falaremos sobre o método PATCH, que serve para `modificar parcialmente um recurso`, diferentemente do PUT, que é usado para modificar o recurso inteiro. Ele não é um verbo seguro nem idempotente, e recebe um Body tanto na requisição quanto resposta, não é usado em formulários e não é cacheable.

Terminal: `curl -d '{"title":"my-title"}' -H "Content-Type: application/json" -X PATCH http://localhost:3000/posts/1`
Response: `PATCH /posts/1 200 35.017 ms - 60`

## Antes das Modificações

{
    "id": 1,
    "title": "json-server",
    "author": "typicode"
}

## Depois das Modificações

{ 
    "id": 1,
    "title": "my-title",
    "author": "typicode"
}