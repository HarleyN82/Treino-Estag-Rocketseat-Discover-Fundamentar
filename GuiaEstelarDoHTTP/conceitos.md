# Conceito

Nessa aula vamos esclarecer alguns conceitos relacionados ao HTTP, que foi feito pra ser um protocolo simples e fácil de entender pra qualquer pessoa. Ele foi baseado na estrutura de cliente/servidor, ou seja, sempre vão ter uma requisição e uma resposta acontecendo, como um exemplo, voce pode pensar na forma de comprar um lanche, você faz um pedido, especificando a comida que você quer, e o estabelecimento te "responde" com a comida. 

O HTTP foi criado para também ser stateless, traduzindo, não guardar estado, ou seja, ele não vai guardar nenhuma informação, e não existe nenhuma relação entre as conexões (uma coisa não depende da outra). Só porque eu joguei uma moeda e deu cara, não significa que sempre dará cara.

E devido a essa caracterítica pode ser fácil pensar que perdiriamos informações em um site que demos lógin. Porque, eu dar login uma fez, fazr minhas atividades, dar um reload e ter essa informações de novo, não significa nada, porque não há conexão. O que faz os dados serem guardados são as sessões (cookies ou localStorage). Guardar uma informação para ser guardada na próxima conexão.

Outra característica do protocolo é ser extensível, podendo fazer diversas trocas de informação entre o cliente e o servidor, conforme a necessidade.

* Estado - Condição atual do cliente

## Cliente

Nessa aula falaremos do Cliente, que na maioria das vezes é o Browser, ou no nosso caso, também pode ser o cURL. O Cliente é a entidade que dá inicio à toda comunicação com um pedido, fora em algumas poucas exceções. Esses pedidos são feitos através de ações, que usam os métodos do HTTP, como GET, POST, PUT e DELETE, que vamos ver com mais detalhes em uma próxima aula.

## Servidor

Nessa aula nós falaremos do Servidor, que é uma máquina em algum lugar do mundo preparada para lidar com as requisições do cliente e mandar uma reposta. A resposta sempre tem um Status Code, e pode ter headers e body.

## Proxies

Nesta aula vamos falar sobre Proxies, que são coisas que ficam entre o Servidor e o Cliente, como por exemplo o roteador que está servindo internet para você agora. O Proxy pode ter diversas funções, como cache, para armazenar algumas informações e acelerar o uso. filtro, para impedir o acesso de alguns sites para um antivirus ou um controle parental, entre outros.