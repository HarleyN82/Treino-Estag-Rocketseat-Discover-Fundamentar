## Informando o diretório atual

linux: `pwd`
windows: `cd`

## Navegando pelas pastas

O comando cd (ou change directory) vai ser utilizado quando se deseja mudar de diretório, como por exemplo, ir para a pasta Downloads do seu computador, seria usado o seguinte comando (assumindo que você esteja na pasta do seu user):

`cd Downloads`

Caso deseje voltar um diretório, use cd .. , dessa forma:

`cd ..`

Caso deseje voltar mais de um diretório, use uma / como separação, ex:

`cd../../../`

Nesse caso, voltaríamos 3 diretórios, dado que temos 3 repetições do comando.

Caso deseje voltar de onde veio, use cd ~, da seguinte forma:

`cd ~` (linux)

no caso de um diretório com espaços, devem-se usar as barras invertidas (ou \ ), visto que sem essas barras, o computador não consegue reconhecer o espaço no diretório e não consegue acessá-lo, deve ser utilizado da seguinte forma:

`cd Diretório\ com\ espaços`

ou, fazer uso de aspas, da seguinte forma:

`cd "Diretório com espaços/"`

## Obtendo informações dos arquivos

**Linux**
Vamos falar sobre o comando que lista arquivos e pastas, o ls. Quando utilizado sem nenhum argumento, irá listar os arquivos e diretórios dentro de determinada pasta, quando utilizado com o argumento -l, irá mostrar as permissões dos arquivos, qual o dono e o grupo e o tamanho dos arquivos e diretórios em bytes (se usado com -h, será mostrado de forma mais fácil de compreender, com K, M, G, etc), se usado com o argumento a, mostra também os arquivos ocultos do sistema, se utilizado com o argumento R, fica formatado de forma recursiva, mostrando uma árvore dos seus diretórios, e por fim, o argumeto S ordena os seus arquivos por tamanho.

**Windows**
Comando DIR


## Obtendo informações dos arquivos

**Linux**
Nesta aula, falaremos sobre os comandos file e stat, ambos utilizados para obeter maiores informações dos arquivos, utilizados da seguinte forma:

`file NomeDoSeuArquivo.txt`
O comando file é utilizado para obter informações gerais, como formato e informações do tipo de arquivo.

já o comado stat é utilizado, ele mostra a permissão que se tem no arquivo, o dono e o grupo, tamanho, data de última modificação outras informações úteis. É usado da seguinte forma:

`stat NomeDoSeuArquivo.txt`

**Windows**

`type NomeDoSeuArquivo.txt` 
Você consegue vê o conteúdo de dentro do arquivo.

## Criando diretórios com mkdir

Nesta aula será utilizado o comando mkdir (make directory, ou fazer diretório, do inglês).

Caso queira criar um diretório, use o com a seguinte sintaxe

mkdir Pasta1
Podemos também criar múltiplas pastas com uma só execução do comando, da seguinte forma:

mkdir Pasta1 Pasta2 Pasta3
Ou ainda adicionar pastas dentro dessas pastas da seguinte forma ao usar o argumento -p, que nos possibilita

mkdir -p Pasta1/DentroDaPasta1/MaisUmaPasta/Pastaception

## Criando arquivos com touch 

Nesta aula falaremos sobre como criar um ou mais arquivos com o comando touch, que também serve para atualizar o registro de data e hora de arquivos ou pastas.

É executado da seguinte maneira:

`touch NomeDoArquivoOuPastaParaAtualizar`
E, para criar uma pasta ou arquivo com o touch, só precisamode colocar o comando e o nome de um arquivo ou pasta que não exista no mesmo diretório, e assim como o mkdir, pode ser usado para criar mais de um arquivo ao mesmo tempo, exemplo abaixo:

`touch file1.txt file2.txt file3`
Você pode perceber que o file 3 não possui uma extensão, porém, mesmo assim nao deixa de ser um arquivo, diferentemente do mkdir, onde um comando feito assim resultaria numa pasta chamada file3 sendo criada.

**Windows**

`type nul > “nomedoarquivo.txt”`
Criando um arquivo nulo 

`type .gitignore > "nomedoarquivo.md"`
Criando um arquivo md


## Copiando arquivos e pastas

Falaremos nesta aula sobre o comando cp (que é copy, ou do inglês, cópia), que é um comando utilizado para copiar arquivos.

O primeiro argumento é o nome do arquivo que deseja copiar, já o segundo argumento é onde copiar o arquivo, da seguinte forma:

`cp File1.txt Destino`
Caso você deseje copiar pastas, ainda é possível, porém será necessário o uso do argumeto -r, da seguinte forma:

`cp -r Pasta1 Pasta2`
Podemos ainda copiar mais de uma pasta ou arquivo, fazendo uso de espaços, sendo o último argumento a localização final, da seguinte forma:

`cp -r Pasta1 Pasta2 Pasta3 Pasta4 Pasta5 Pasta6 pastaDestino`


**Windows**
`copy File1.txt Destino`


## Substituir o conteúdo do texto

**Windows**
`copy con “arquivoteste”.txt`

- Pressione “Enter”.
- Redija seu texto. Esse editor de texto é rudimentar, mas é útil para tomar notas rápidas e fazer programação. Pressione “Enter” para pular à próxima linha.
- Use o atalho “CTRL + Z” ao terminar a edição.
- Aperte “Enter”. Logo, a mensagem “1 arquivo(s) copiado(s)" aparecerá, ou seja, o item foi salvo com o nome que você criou.

## Movendo e renomeando arquivos/pastas

Nesta aula veremos sobre o comando mv, que pode ser tanto usado para mover quanto renomear os arquivos. Para mover um arquivo de um diretório para outro, primeiro tenha certeza que está no diretório correto, após isso, utilize o comando da seguinte maneira:

`mv File Destino`

Pode-se mover também múltiplos arquivos simultâneamente, assim como no cp, utilizando-se de espaços e deixando o último argumento como destino, da seguinte forma:

`mv Pasta1 Pasta2 Pasta3 Pasta4 Pasta5 Pasta6 pastaDestino`

Para renomear ARQUIVOS, deve ser utilizado da seguite forma:

`mv file.txt arquivo.txt`


**Windows**

`move samara.txt ./../Pasta02`
No mesmo diretório (./) vai voltar uma pasta, indo da pasta01 para pasta02. (movendo)

`move nomedoarquivo.txt samara.txt` (renomeando arquivos)


## Removendo arquivos/pastas

Atenção!

Esse comando vai remover totalmente o arquivo ou pasta, sem enviar para a lixeira, tome cuidado!

O comando esse caso é o rm, e é utilizado da seguinte forma:

`rm file1.txt file2.txt`
Caso você queira remover um diretório, deve usar o argumenro -r, dessa forma:

`rm -r NomeDoDiretorio`
E, às vezes ele pode acabar pedindo sua permissão para deletar algo, e caso você não queira ter que confirmar suas ações, use o prefixo -f, dessa forma:

`rm -rf file1.txt file2.txt`
Tome muito cuidado com esse comando!


**Windows**
`del resumo.txt`


## Wildcards (curingas)




## Encontrar arquivos ou pastas com find




## Ver conteúdo de arquivos com cat e less




## Editando arquivos com nano e vim


## Exibir todos os aquivos e pastas e tudo dentro

`dir /S` - mostra tudo com detalhes
`TREE` - mostra estilo árvore.