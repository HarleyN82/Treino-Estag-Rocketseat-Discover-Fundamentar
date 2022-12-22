// Father Class
class Hero {
    constructor(name,level) {
        this.name = name;
        this.level = level;
    } 
        
    greet() {
        return `${this.name} says hello.`
    }  
}

// Son Class
class Mage extends Hero {
    constructor(name,level,spell){
        // Chain constructor with super
        super(name,level);
        // Add a new property to the class
        this.spell = spell;
    }
}

function showHero(hero){
    console.log(`${hero.name} - ${hero.level} - ${hero.spell}`);
}

// Instância
let hero1 = new Hero('Varg',1);
let hero2 = new Mage('Wanda',2,'Magic Missile');

showHero(hero1);
showHero(hero2);

console.log(hero1.greet());
console.log(hero2.greet());