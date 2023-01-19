/* 

O segundo irá importar a função e passar a flag desejada.

Iremos rodar no terminal o segundo arquivo passando as flags --name e --greeting para que sejam impressos no terminal a saudação e o nome da pessoa.

*/

const getFlagValue = require('./flags');
console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)

// node greetings --name "Samara Silvia" --greeting "Tudo bem com você?"
// Pode passar as variáveis na ordem inversa tbm.