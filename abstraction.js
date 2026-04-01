class coffeeMachine{
    start(){
        this.#boilWater();
        this.#brewCoffee();
        this.#addCoffee();
        console.log("Your coffee is ready!");
    }
    #boilWater(){
        console.log("Boiling water...");
    }   
    #brewCoffee(){
        console.log("Brewing coffee...");
    }
    #addCoffee(){
        console.log("Adding coffee...");
    }
}

const myCoffeeMachine = new coffeeMachine();
myCoffeeMachine.start();