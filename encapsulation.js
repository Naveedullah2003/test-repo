class BankAccount{
    #balance=0; // # indicates a private field
    deposit(amount){
        if(amount>0){
            this.#balance+=amount;
        }else{
            console.log("Invalid deposit amount");
        }
    }
    withdraw(amount){
        if(amount>0 && amount<=this.#balance){
            this.#balance-=amount;
        }else{
            console.log("Invalid withdraw amount");
        }
    }
    getBalance(){
        return this.#balance;
    }   
}

const myAccount=new BankAccount();
myAccount.deposit(100);
console.log(`Current Balance: Rs.${myAccount.getBalance()}`); // Output: 100
myAccount.withdraw(30);
console.log(`Current Balance: Rs.${myAccount.getBalance()}`);