class Person{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this.name;
    }

    set name(newName){
        this.name = newName;
    }
}

let p = new Person("John");
console.log(p.name)