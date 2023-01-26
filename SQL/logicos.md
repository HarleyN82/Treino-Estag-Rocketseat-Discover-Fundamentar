# Operadores Lógicos

## AND

`SELECT * FROM aluno WHERE nome like 'j%' AND matricula < 2`
Aqui eu pedi o resultado de alunos que comecem com J e tenham a matricula com o número 2. Como é um operador lógico AND é preciso que essas duas condições sejam aceitas.

## OR

`SELECT * FROM aluno WHERE nome like 'j%' OR matricula < 2`
Aqui eu pedi o resultado de alunos que comecem com J e tenham a matricula com o número 2. Como é um operador lógico OR é preciso que apenas uma dessas condições seja aceita.

## BETWEEN E NOT BETWEEN

`SELECT * FROM funcionarios WHERE ID_FUNCIONARIO BETWEEN  4 and 7`
Esse comando permite que trabalhemos com intervalos.

`SELECT * FROM funcionarios WHERE ID_FUNCIONARIO NOT BETWEEN  4 and 7`
Permite que trabalhemos com intervalos, mas de maneira exclusiva.

## IN e NOT IN

`SELECT * FROM funcionarios WHERE id_departamento IN (1,2,5)`
Esse comando permite que a gente selecione vários dados a partir de parâmetros específicos.

`SELECT * FROM funcionarios WHERE id_departamento NOT IN (1,2,5)`
Esse comando permite que a gente selecione vários dados a partir de parâmetros específicos, no sentido de exclusão.

## IS NULL e IS NOT NULL

`SELECT * FROM funcionarios WHERE id_departamento IS NULL`
Esse comando permite que a gente selecione dados específicos.

`SELECT * FROM funcionarios WHERE id_departamento IS NOT NULL`
Esse comando permite que a gente selecione dados específicos de maneira exclusiva.