// Matriz 3x3
const students = [['Joseph',23,'MG'],['Larissa',19,'RJ'],['Priscila',22,'PR']]

// Acessando elementos na Matriz
console.log(students[0][1]) // 23

// Forma 02
// Matriz 2x2
const books = new Array(2);
books[0] = ["Pequeno Príncipe","A culpa é das estrelas"]
books[1] = ["O vendedor de sonhos"]

// Adiiconando elementos na Matriz
books[1][1] = "Batman: Piada Mortal"
console.log(books[1][1]);

// Exibir uma matriz

function exibe(){
    for(let linha in books){
        for(let coluna in books[linha]){
            console.log(books[linha][coluna]);
        }
        console.log(" ")
    }
}

exibe()

/*if(books[linha][coluna] == books[0][coluna]){
                console.log(books[linha][coluna])
            } else{
                console.log("|" + books[linha][coluna])
}*/