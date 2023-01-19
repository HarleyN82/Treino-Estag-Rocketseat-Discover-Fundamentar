// Apresentando as perguntas com process.stdout.write

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido e que fiz/farei para melhorar ",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + " > ")
}

ask()

// Lógica para apresentar perguntas e salvar respostas

const answers = []

// Recebendo dados de entrada e assincronismo com process.stdoin.on

process.stdin.on('data', data => {
    //process.stdout.write(data.toString().trim() + '\n')
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
    } else{
        process.exit();
    }
})

process.on('exit', () => {
    console.log(`
        Bacana Samara!

        O que você aprendeu hoje foi:
        ${answers[0]}

        O que te aborreceu e você pode melhorar foi:
        ${answers[1]}

        O que te deixou feliz hoje:
        ${answers[2]}

        Voce ajudou ${answers[3]} pessoas hoje !!

        Volte amanhã para novas reflexões
    `)
})

/* Retorno da Função

console.log(answers) // ou  process.stdout.write(answers.toString())

Se não colocar o ".toString()" dará erro de tipagaem, porque esse process.stdout.write() só recebe string. Ou podemos usar ${}
*/