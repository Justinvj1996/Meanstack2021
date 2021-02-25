class Bank {
    static getAccountDetails() {
        var accountdetails = {
            1000: { acno: 1000, name: "userone", balance: 5000, password: "user1" },
            1001: { acno: 1001, name: "usertwo", balance: 2000, password: "user2" },
            1002: { acno: 1002, name: "userthree", balance: 6000, password: "user3" },
            1003: { acno: 1003, name: "userfour", balance: 8000, password: "user4" },
            1004: { acno: 1004, name: "userfive", balance: 4000, password: "user5" },
        }
        return accountdetails
    }
    static authenticateUser(acno, password) {
        let data = Bank.getAccountDetails()
        if (acno in data) {
            if (password == data[acno]["password"]) {
                return 0; //password correct
            }
            else {
                return 1;//password invalid
            }
        }
        else {
            return -1;//invalid acno
        }

    }
    static login() {
        let acno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pwd").value;
        let data = Bank.getAccountDetails()
        if (acno in data) {
            if (pwd == data[acno]["password"]) {
                alert("Authentication successful")
                window.location.href = "userhome.html";
            }
            else {
                alert("Invalid Password")
            }
        }
        else {
            alert("INVALID DATA")
        }

    }
    static deposit() {
        let acno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pwd").value;
        let amount = document.querySelector("#amt").value;
        let user = Bank.authenticateUser(acno, pwd);
        let data = Bank.getAccountDetails()
        if (user == 0) {

            data[acno]["balance"] += Number(amount)
            alert("available balance : " + data[acno]["balance"])
        }
        else if (user == 1) {
            alert("Invalid Password")
        }
        else {
            alert("Invalid Account number")
        }

    }
    static withdraw() {
        let acno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pwd").value;
        let amount = document.querySelector("#amt").value;
        let user = Bank.authenticateUser(acno, pwd);
        let data = Bank.getAccountDetails()
        if (user == 0) {
            if (amount > data[acno]["balance"]) {
                alert("Insufficient Balance")
            }
            else {
                data[acno]["balance"] -= Number(amount)
                alert("available balance : " + data[acno]["balance"])
            }
        }
        else if (user == 1) {
            alert("Invalid Password")
        }
        else {
            alert("Invalid Account number")
        }

    }
}