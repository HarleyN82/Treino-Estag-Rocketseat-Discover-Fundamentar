// Função Construtora Inicializada

function Hero(name,level){
    this.name = name;
    this.level = level;

    this.getName = function(){
        return this.name;
    }

    this.setName = function(name){
        return this.name = name;
    }

    this.getLevel = function(){
        return this.level;
    }

    this.setLevel = function(level){
        return this.level = level;
    }
}

// Adding a method to the constructor
Hero.prototype.greet = function() {
	return `${this.name} says hello.`;
}

// Herança em Funções Construtoras

function Mage(name,level,spell){
    Hero.call(this,name,level);  // conexão com o pai
    this.spell = spell; // adição de nova propriedade

    this.getSpell = function(){
        return this.spell;
    }

    this.setSpell = function(spell){
        return this.spell = spell;
    }
}

// Definição de propriedades e métodos fora do escopo não se conectarão com a função extendidada.

function showHero(hero){
    console.log(`${hero.name} - ${hero.level} - ${hero.spell}`);
}

// Instância - Objetos

let hero1 = new Hero('Varg',1);
let hero2 = new Mage('Wanda',2,'Magic Missile'); // hero.getName(),hero.getlevel() - Pegando literalmente os mesmos dados

showHero(hero1);
showHero(hero2);

console.log(hero1.greet()); // Só está conectado ao pai, por causa do prototype.

// Se o pai não estiver inicializado, então o filho tbm não estará, visto que os parâmetros do filho se conectam com os parâmetros do pai.