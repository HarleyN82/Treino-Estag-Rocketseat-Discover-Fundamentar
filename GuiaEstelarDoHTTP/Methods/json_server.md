# Json Server

Nesta aula iremos ensinar como instalar a ferramenta JSON Server, que nos permite pegar respostas em formato JSON. Antes de tudo temos que já ter o Node.js instalado na máquina, depois disso podemos executar o comando `npm install -g json-server`, depois do comando terminar, crie um diretório chamado http-course e entre nele, crie um arquivo com `cat > db.json` e depois copie as linhas de código:

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

Para fechar é só dar o comando `ctrl+c`

## Teste

Agora pra iniciar o servidor, podemos usar o comando `json-server --watch db.json` e assim podemos acessar esses conteúdos.

- Para testar o funcionamento do novo servidor coloque o comando `curl http://localhost:3000/posts`
- A resposta do servidor foi: `GET /posts 200 57.761 ms - 77`
- Colocando `curl -i http://localhost:3000/posts` tivemos a visualização de todo o cabeçalho

```json
HTTP/1.1 200 OK
X-Powered-By: Express        
Vary: Origin, Accept-Encoding
Access-Control-Allow-Credentials: true
Cache-Control: no-cache
Pragma: no-cache
Expires: -1
X-Content-Type-Options: nosniff
Content-Type: application/json; charset=utf-8
Content-Length: 77
ETag: W/"4d-49G7XbVRP2NKipc5uj9Z4hcUq3Y"     
Date: Mon, 23 Jan 2023 19:59:02 GMT
Connection: keep-alive
Keep-Alive: timeout=5
[
  {
    "id": 1,
    "title": "json-server",
    "author": "typicode"
  }
]
```

## Referêncas

- https://github.com/typicode/json-server
- https://www.web-development-kb-pt.site/pt/git/como-posso-criar-um-arquivo-de-texto-no-git-bash/1052695823/#:~:text=Existem%20v%C3%A1rias%20maneiras%20de%20criar%20um%20arquivo%20usando,cria%20e%20pode%20come%C3%A7ar%20a%20anexar%20ao%20arquivo.