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


# COMANDO INSERT INTO

`INSERT INTO aluno(nome,cpf,responsavel) VALUES ('Samara Silvia',23456789012,'Taciana Sabino')`
Possibilita a inserção de dados, tendo o local onde será inserido junto com os campos a serem preenchidos e depois os dados em si de forma ordenada.

Obs: O campo matricula não precisa ser inserido, porque ele faz um auto incremento.

`SELECT * FROM aluno`
Para fazer a verificação dos dados adicionados.


# COMANDO UPDATE

`UPDATE aluno SET nome = 'Mariano Soares', responsavel = 'Marcio Soares' WHERE matricula = 2`
Possibilita a atualização de dados, passando os novos valores e de onde eles serão atualizados.

Obs: Caso você não queira atualizar tudo é só pular o campo.
Obs2: Se não colocarmos o where, então ele vai atualizar todos os dados do campo pedido.

# COMANDO DELETE

`DELETE FROM aluno WHERE matricula = 3`
Possibilita a deleção do registro dos dados e não somente os campos preenchidos, através da primary key.