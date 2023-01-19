// Escrever algo de entrada
// On é usado como algo que "ouve" o evento
// Data - Quando tiver dados ele vai ficar ouvindo e quando for inserido dados ele vai rodar uma função
process.stdin.on("data", data => {
    console.log(`You typed ${data.toString()}`);
    process.exit();
})

// Digite qualuer coisa no terminal 
// Ex: GeeksForGeeks