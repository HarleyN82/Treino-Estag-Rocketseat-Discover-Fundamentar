# POST

Nesta aula falaremos sobre o método POST, que vem do inglês to post, que serve para `publicar ou cadastrar um recurso`. Ele não é seguro nem idempotente, pois muda informações no servidor e não receberá a mesma resposta de uma mesma requisição, o verbo POST tem Body tanto na requisição quanto na resposta, pode ser usado em formulários e é cacheable.

- Terminal: `curl -d '{ "id": 2, "title": "json-server-2", "author": "samara silvia" }' -H "Content-Type: application/json" -X POST http://localhost:3000/posts`

- Response: `POST /posts 201 114.004 ms - 70`

 % Total    % Received % Xferd  Average Speed   
--:--:-- --:--:--   407

* O "-d" se refere ao "data" novos dados que vão colcoar no servidor.