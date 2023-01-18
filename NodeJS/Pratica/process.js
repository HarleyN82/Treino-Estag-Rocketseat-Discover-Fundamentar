// Process
// Objeto que vai estar falando sobre os processos que estão sendo executados no node
// argv - é usada para inserir argumentos
// lista de argumentos

console.log(process.argv)

const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`Seu nome é ${firstName} ${lastName}`)

// node process Samara 123 nada
// Cada espaço será uma posição no array