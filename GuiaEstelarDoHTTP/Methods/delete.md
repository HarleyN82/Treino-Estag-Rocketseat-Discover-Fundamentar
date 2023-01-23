# DELETE

Nesta aula falaremos sobre o método DELETE, que serve para remover um recurso, e pode ser respondido com o código 202, que não foi processado mas já foi aceito, 204, que significa que o recurso não existe e 200, que significa que o conteúdo foi deletado. Ele não é um método seguro, mas é idempotente, tem a possibilidade de receber Body tanto na requisição quanto na resposta, não é usado em formulários e não é cacheable.

Terminal: `curl -X DELETE http://localhost:3000/posts/2`
Response: `DELETE /posts/2 200 36.509 ms - 2`

## Antes das Alterações

{
  "id": 2,
  "title": "json-server-2",
  "author": "samara silvia"
}

## Após as Alterações

Não existe mais um id:2