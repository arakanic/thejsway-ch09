/*
Account list
Let's build upon a previous account object exercise. A bank account is still defined by:

A name property.
A balance property, initially set to 0.
A credit method adding the value passed as an argument to the account balance.
A describe method returning the account description.
Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

CONSOLE
"owner: Sean, balance: 1000"
"owner: Brad, balance: 1000"
"owner: Georges, balance: 1000"
*/

class Account {
    constructor(accountHolder) {
        this.accountHolder = accountHolder
        this.balance = 0
    }
    credit(value) {
        this.balance += Number(value)
    }
    describe() {
        return `owner: ${this.accountHolder}, balance: ${this.balance}`
    }
}

const newAccounts = function() {
    const accountArray = [sean = new Account("Sean"), brad = new Account("Brad"), georges = new Account("Georges")]
    accountArray.forEach(account => {
        account.credit(1000)
        console.log(account.describe())
    })
}