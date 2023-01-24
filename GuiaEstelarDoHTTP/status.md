# Status

A proposta do status code é ter uma comunicação mais clara entre o back-end com o cliente. 

## Tipos de Status Code:

- Status Code 100: servem pra mostrar que a operação pode ser continuada sem problemas.

- Status do tipo 200
    - 200, significa que tudo está ok (GET e POST).
    - 201, significa que o recurso foi criado (PUT).
    - 204, significa que não há conteúdo (PUT e DELETE). 

- Status do tipo 300
    - 301, significa movido permanentemente (pode vir com um header location para a nova localização)
    - 302, significa conteúdo encontrado, mas movido temporariamente.
    - 308, significa redirecionamento permanente (funciona como uma movimentação permanente. E é mais usado no método Post)
    - 307, redirecionamento temporário

- Status do tipo 400
    - 400, que significa que o pedido foi mal efetuado
    - 401, que significa que o pedido não teve autorização
    - 403, que significa que a autorização foi negada
    - 404, que o pedido não foi encontrado
    - 405, que significa que o método usado não é permitido 
    - 429, que significa que foram efetuados muitos pedidos. 

- Status do tipo 500
    - 500, que significa que ocorreu um erro desconhecido no servidor
    - 503, que significa que o servidor está indisponível no momento.

## Buscando mais informações

Se por acaso você não quiser instalar o DevDocs na sua máquina, o serviço pode ser acessado pelo site devdocs.io, e nele pode ser pesquisado algo como "http status" e pode-se encontrar diversos status code junto aos seus significados.