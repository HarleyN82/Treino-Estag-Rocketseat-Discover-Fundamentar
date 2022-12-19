/*
    Type conversion (typecasting) vs Type coersion
    * Alteração de um tipo de dado para outro tipo

    - Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, por exemplo com o método Number();
    - Type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, por exemplo quando você tenta somar um número na forma string com um número do tipo número.
*/

console.log('9' + 5) // type coersion - number(5) --> string('5')
console.log(Number('9') + 5) // type conversion - string('9') --> number(9)