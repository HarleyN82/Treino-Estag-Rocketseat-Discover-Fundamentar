# Conceito

Para entendermos como como chegar a um endereço, precisamos entender primeiramente como montar um endereço, para isso usamos o URI, sigla para Uniform Resource Identifier, Identificador de Recurso Uniforme em português, que serve para identificar um recurso por seu nome ou sua localização.

## Resource

Para entendermos o URI precisamos entender o que é o recurso, que é o alvo do pedido feito cliente. Um recurso pode ser qualquer coisa identificável, como uma entidade digital, como um email, uma entidade abstrata, como uma sessão e até uma entidade física, como um produto.

Sessão - Abrir o gmail e vou checar meus emails, estou iniciando uma sessão. São caminhos e endereços e eles são abstratos, porque eu não os acesso diretamente, mas sim de forma indireta, não concreta.

> Se podemos identificar, nomear, enddereçar ou manipular um dado estamos falando de um recurso.

## Locator (localizador - url)

Um recurso pode ser encontrado pelo locator, localizador em português, ou pelo nome, para encontrar com o locator, utilizamos o URL, sigla para Uniform Resource Locator, ou seja, toda URL é um URI, mas o contrário não é verdadeiro. 

Toda URL obrigatoriamente precisa de 2 componentes, um protocolo, que é por exemplo o "HTTPS" em uma URL, e um domínio, que é por exemplo a parte "rocketseat.com.br" no site da Rocketseat ou no formato IP 127.0.0.1 

> Um domínio é um endereço único para um site. Geralmente, ele consiste no nome do site e numa extensão de domínico. Um domínio memorável vai fortalecer sua marca e ajudar seu público a encontrar o seu site.

A URL pode ter alguns outros componentes opcionais, como o subdomínio, como a parte "www." antes de alguns URLs, como o Path, que serve para acessar partes específicas de um site, como os Parâmetros, como a Porta, que é um componente que é adicionado depois do domínio por um carácter :, e também a Âncora (#), que serve para apontar algum lugar específico de algum documento.

* Quando usamos um localizador com o protocolo http sem uma porta implicitamente estamos usando a porta 80 e caso seja com https é a porta 443. (Abertas e disponíveis no servidor)

🔍 **Qual a diferença entre hospedagem de sites e domínio?** Para publicar um site na internet você precisa de um domínio registrado e de um servidor de hospedagem. Enquanto a hospedagem é responsável por armazenar os arquivos do seu site, o domínio é o endereço que seus visitantes vão usar para chegar até você.

* Localizadores Opcionais não significa apenas que eu posso colocar ou não, mas que sua presença é uma diferença para encontrar algum recurso.

## URN

Para encontrar um recurso pelo nome, ao invés da URL, utilizamos a URN, Uniform Resource Name. Um exemplo de URN é urn:isbn:0451450523, porém a URL é bem mais usada na web.