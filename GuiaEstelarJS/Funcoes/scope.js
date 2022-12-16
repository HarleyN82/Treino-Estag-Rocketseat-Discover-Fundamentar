// function scope

let subject = 'create video'

function createThink(){
    /*let*/ subject = 'study'
    return subject
}

/* 

function createThink(){
    subject = 'study'
    return subject
}

Nesse caso, como não tem parâmetro o "subject" e por não ser declarada essa variável vai buscar a declaração no escopo anterior, então ocorre por subscrever o valor da variável, fazendo todos serem "study". 
*/

console.log(createThink(subject)) // Retorna o valor da função.
console.log(subject) // Retorna o valor da variável que criamos lá em cima

/*Obs: No segundo console "subject" é apenas um nome de referência um 
argumento que será um parâmetro para a função.*/

// Toda função que não tem retorno é undefined