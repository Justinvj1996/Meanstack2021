class Bank {
    constructor(acno, pname, minbal) {
        this.acno = acno; //this.acno=> instance variable of class
        this.pname = pname;
        this.bal = minbal;
    }
    deposit(amount) {
        this.bal += amount;
        console.log("Account credited with " + amount + " Available balance: " + this.bal);
    }
    withdraw(amount) {
        if (amount > this.bal) {
            console.log("Insufficient Fund");
        }
        else {
            this.bal -= amount;
            console.log("Account debited with " + amount + " Available balance: " + this.bal);

        }

    }
    balanceenq() {
        console.log("Available balance is: " + this.bal);
    }

}
var obj = new Bank(101, "Ravan", 20000) //constructer
obj.withdraw(6000)