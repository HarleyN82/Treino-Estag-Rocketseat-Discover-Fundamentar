# Operadores Relacionais

## = 

`SELECT * FROM aluno WHERE cpf = 45678945645`
O operador = ajuda na busca específica de dados. Isso quando temos conhecimento específico do usuário.

Obs: Ele só funciona em campos que são number.

## LIKE

`SELECT * FROM aluno WHERE nome like 'Mariano Garcia'`
Como o "=" serve apenas para números o like serve para string.

## >, Maior que

`SELECT * FROM aluno WHERE matricula > 2`
Usado para estabelecer um parâmetro de comparação

## <, Menor que

`SELECT * FROM aluno WHERE matricula < 3`
Usado para estabelecer um parâmetro de comparação

## >=, Maior/Igual que

`SELECT * FROM aluno WHERE matricula >= 2`
Usado para estabelecer um parâmetro de comparação, incluindo o parâmetro.

## <=, Menor/Igual que

`SELECT * FROM aluno WHERE matricula <= 3`
Usado para estabelecer um parâmetro de comparação, incluindo o parâmetro.

## <> Não igual a

`SELECT * FROM aluno WHERE matricula <> 1`
Esse comando usa a comparação negativa para trazer nossos dados. Ao invés de inclusão vem a exclusão.

## != Diferente de

`SELECT * FROM aluno WHERE matricula != 1`
Esse comando usa a comparação negativa para trazer nossos dados. Ao invés de inclusão vem a exclusão.