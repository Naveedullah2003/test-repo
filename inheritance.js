class Animal{
    constructor(name){
        this.name=name;
    }
    makeSound(){
        console.log(`${this.name} make a sound.`);
    }
}

class Dog extends Animal{
    bark(){
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog("Buddy");
myDog.makeSound();  
myDog.bark();