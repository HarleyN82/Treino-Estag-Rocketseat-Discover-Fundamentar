// Flags
// É o termo para referenciar os valores expostos. Seria a nossa chave (pensando em objeto)

console.log(process.argv)
const firstName = process.argv[3]
console.log(`Seu nome é ${firstName}`)

// node process --name "Samara Silvia" --greeting "Tudo bem com você?"