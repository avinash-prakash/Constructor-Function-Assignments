/*  
1) Current Account
2) Savings Account
3) Recurring Deposit Account
4) Fixed Deposit Account
*/
function CreateBankAccount(accountNumber, Name, Type, Balance){
    this.accountNumber = accountNumber;
    this.Name = Name;
    this.Type = Type;
    this.Balance = Balance;
    this.deposit = function(amount){
        this.Balance += amount;
        console.log("Deposited Successfully", amount);
    }
    this.withdraw = function(amount){
        if(amount <= this.Balance){
            this.Balance -= amount;
            console.log("Withdrawn Successfully", amount);
        }
        else{
            console.log("Insufficient Balance", this.Balance);
        }
    }
    this.printBalance = function(){
        console.log("Total Balance: ", this.Balance);
    }
    this.isActive = function () {
        return true;
    };
}

let account1 = new CreateBankAccount(5896341890, "Rohit", "Savings Account", 1400000);
// console.log(account1,"Without depositing")
account1.deposit(56000);
account1.withdraw(57000);
account1.withdraw(48000);
account1.deposit(76000)
account1.printBalance();
console.log(account1);

let account2 = new CreateBankAccount(4958252922, "Virat", "Current Account", 1600000);
account2.deposit(86000);
account2.withdraw(28000);
account2.withdraw(52000);
account2.deposit(76000)
account2.printBalance();
console.log(account2);

let account3 = new CreateBankAccount(2557654528, "Mahendra Singh", "Saving  Account", 1800000);
account3.withdraw(76899);
account3.deposit(100000);
account3.withdraw(67000);
account3.deposit(62000)
account3.printBalance();
console.log(account3);

let account4 = new CreateBankAccount(1394184194, "Sachin", "Saving Account", 2000000);
account4.withdraw(88000);
account4.deposit(89500);
account4.withdraw(35000);
account4.deposit(62000)
account4.printBalance();
console.log(account4);

let account5 = new CreateBankAccount(9214124146, "Rahul", "Current Account", 1200000);
account5.withdraw(38749);
account5.deposit(69000);
account5.withdraw(18937);
account5.deposit(76000);
account5.printBalance();
console.log(account5);

let account6 = new CreateBankAccount(236278,"Mahendra Singh", "Recurring Deposit Account", 500000);
account6.deposit(5000);
account6.deposit(5000);
account6.deposit(5000);
account6.deposit(5000);
account6.deposit(5000);
console.log(account6);

let account7 = new CreateBankAccount(237838, "Sachin", "Fixed Deposit Account", 826000);
account7.deposit(4000);
account7.deposit(4000);
console.log(account7);

function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (let account of accounts) {
        if (account.isActive()) {
            totalBalance += account.Balance;
        }
    }
    return totalBalance;
}

let accounts = [account1,account2,account3,account4,account5];
console.log(accounts[0].isActive());
console.log(accounts[1].isActive());
console.log("Total balance of all active accounts:", getTotalBalance(accounts));