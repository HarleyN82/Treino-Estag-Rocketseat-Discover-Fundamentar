# Tipos de Campos

Os campos precisam de uma configuração, ou seja, um informativo de que tipos de dados eles irão abrir.

id_user | Nome  | Nome_de_Usuario | Descrição    | Telefone    
1       | Elisa | @elisa          | oh no no no  | 11987675436 

id_user | Nome_de_Usuario | id_post | Post                 | video     | data
1       | @elisa          | 1       | Olha esse video kkkk | video.mp4 | 01-04-2020-09-30-22

- Tabela: Perfil
    - Nome: Text
    - Nome de Usuário: Text Unique
    - Descrição: Text
    - Telefone: Number
    - id_user: Primary Key
- Tabela: Post
    - id_post: Number Primary Key
    - Post: Text
    - Video: Text
    - Data: DataTime
    - id_user: Number Foreign Key (perfil)

## Primary Key

É um tipo de campo dito como "identificador" da informação. Que no exemplo acima da rede social tiktok seria o "nome de usuário". Único para todo mundo e não pode se repetir.

Ela geralmente, é um número e não um texto, logo podemos criar um outro campo chamado "id_user" para suprir com essa necessidade.

## FOREIGN KEY 

A chave estrangeira é uma chave para representar o relacionamento de uma tabela com outra. No caso, ao invés de copiar e colar os campos de uma tabela para outra, com o intuito de dizer que "aquele aluno tem o professor tal", por exemplo, usamos essa chave como referência.

## Nomes de Campos e Tabelas

Regras para escrever nome de tabelas e de campos:

- Deve começar por uma letra do alfabeto
- Os caracteres seguintes não são permitidos 
    - () + - / * " ; = & | # > < ^ ' {} %
- Não pode conter espaços
- Não pode conter acentuação