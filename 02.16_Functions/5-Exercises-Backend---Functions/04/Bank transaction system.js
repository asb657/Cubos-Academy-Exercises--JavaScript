const bankAccount = {
    name: "Maria",
    balance: 0,
    history: [],
    
    deposit: function(amount){
        
        let historyAdd = {
            type: "Deposit",
            amount: amount
        };
        this.history.push(historyAdd);

        this.balance += amount;
        return `Deposit of $ ${amount/100} made by client ${this.name}.`;
    },

    withdraw: function(amount){
        if(this.balance > amount){
            
            let historyAdd = {
                type: "Withdraw",
                amount: amount
            };
            this.history.push(historyAdd);

            this.balance -= amount;
            return `Withdraw of $ ${amount/100} made by client ${this.name}.`
        } else {
            return `Insufficient balance for withdrawal of ${bankAccount.name}.` 
        };
    },

    bankStatement() {

        let bankStatementMessage = "";
        bankStatementMessage += `Bank statement of ${this.name} - Balance: $${this.balance / 100}`;
        bankStatementMessage += "\n";
        bankStatementMessage += `History:`;
        for (const transacao of this.history) {
            bankStatementMessage += "\n";
            bankStatementMessage += `${transacao.type} of $${transacao.amount / 100}`;
        }
        return bankStatementMessage;
    }
    
};



let history = {
    type: "Depósito",
    amount: 10000, 
};

let saques = {
    type: "Saque",
    amount: 5000, 
}


console.log(bankAccount.deposit(10000));
console.log(bankAccount.withdraw(50000));
console.log(bankAccount.withdraw(5000));
console.log(bankAccount.bankStatement());

