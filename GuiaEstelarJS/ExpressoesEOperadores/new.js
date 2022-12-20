/* 
    New
        * left-hand-side expression
        * Termo usado em POO/POOJS para instanciar(criar/tornar concreto) um objeto com/sem funções construtoras padrões.
*/

function Movie (title,description,year,stars) {
    this.title = title;
    this.description = description;
    this.year = year;
    this.stars = stars;
};

const avengers = new Movie("Avengers","Super Hero Movies",2012,5.0);
const doctorStrange = new Movie("doctorStrange","Super Hero Movies",2016,5.0);
const thorRagnarok = new Movie("Thor Ragnarok","Super Hero Movies",2011,4.5);

console.log(avengers)
console.log(doctorStrange)
console.log(thorRagnarok)

// Podemos criar objetos com funções construtoras padrões

let person1 = new String()
person1.nome = "Harleen"
person1.nickName = "Arlequina"

let age = new Number(22)
let likes = new Array("Puddim","Rosa e Azul","Psicologia")
let birthday = new Date('2000-10-12')

console.log(person1.nome)
console.log(person1.nickName)
console.log(age)
console.log(likes)
console.log(birthday)
console.log(birthday._photo_) // propriedades do date