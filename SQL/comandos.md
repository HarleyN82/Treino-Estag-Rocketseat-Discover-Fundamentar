# Comandos Select

Os comandos sempre são maiscúlos 

> Select é usado para buscar dados

`SELECT * FROM aluno` 
Selecionar todas as informações da tabela aluno

`SELECT nome, responsavel FROM aluno`
Selecionar de maneira específica os dados (as colunas são montadas de acordo com a ordem que escrevemos)

`SELECT * FROM aluno WHERE matricula = 1`
Busca de maneira específica. (procure na tabela aluno alguém com a matrícula 1)

`SELECT * FROM aluno WHERE nome like "j%"`
O like é uma forma de comparar e ao pedir que os nomes venham parecidos com j, em especifíco, mas o resto pode variar. Ao usarmos o % na frente, atrás... estamos dizendo que o começo, final e afins importa, mas o resto não.

`SELECT * FROM aluno WHERE nome like "j%"`
Exemplo completo com WHERE e LIKE