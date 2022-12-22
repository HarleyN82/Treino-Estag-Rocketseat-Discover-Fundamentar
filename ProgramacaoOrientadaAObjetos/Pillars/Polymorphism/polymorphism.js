// Polymorphism 

class Athlete {
    weight;
    category;

    constructor(weight) {
        this.weight = weight
    }

    defineCategory(){

        if(this.weight <= 50){
            return this.category = "Childish"
        } else if(this.weight <= 65){
            return this.category = "Juvenile"
        } else {
            return this.category = "Adult"
        }
    }
}

class Fighter extends Athlete {
    constructor(weight) {
        super(weight)
    }

    defineCategory(){
        if(this.weight <= 54){
            return this.category = "Feather" // pluma
        } else if(this.weight <= 60){
            return this.category = "Light"  // leve
        } else if(this.weight <= 75){
            return this.category = "Midle - Light"  // meio-leve
        } else {
            return this.category = "Heavy" // pesado
        }
    }
}

let athlete = new Athlete(50)
let fighter = new Fighter(50)

console.log(athlete.defineCategory())
console.log(fighter.defineCategory())

console.log(fighter.category) // Só irá mostrar, porque chamamos o método antes