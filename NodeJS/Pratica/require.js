/* 
- Require: É a maneira de chamar módulos que já são nativos no NodeJS.
    - Path: O módulo fornece utilitários para trabalhar com arquivo e diretório.
        - .basename: O método retorna a última parte de um caminho.
        - .extname(path): O método retorna a extensão do arquivo.
        - .isAbsolute: O método retorna em booleano se o caminho passado existe.
*/

// Módulos Nativos
const path = require('path')
console.log(path.basename(__filename)) // "/Users/starter/docs.js"
console.log(path.extname('index.html'))
console.log(path.isAbsolute('/NodeJS/Pratica'))

// Meus módulos
const myModule = require('./exports')
console.log(myModule)