# Conceito

Para existir a comunicação entre o servidor e o cliente precisamos ter mensagens entre eles, que são denoninadas HTTP Messages, que existem tanto no request quanto na response. Elas existem desde a versão 1.1 do protocolo HTTP, onde eram feitas em formato de textos legíveis, agora na versão 2, para serem melhor otimizadas, serão feitas em uma estrutura binária, mas basicamente estão no mesmo jeito.

## Request

A mensagem do pedido consiste no método, por exemplo GET, a versão do protocolo e a URI, dependendo do método usado, pode se levar headers e body.

## Response

A mensagens de resposta tem a versão do protocolo, o status code, os headers e a status message.