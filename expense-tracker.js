const account = {
    name: 'Matheus',
    expense: [],
    income: [],
    addIncome: function (description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    addExpense: function (description, amount) {
        this.expense.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0
        
        this.expense.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })
        
        accountBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expences.`
    }
}

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> name has $125 in expenses.

// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary


account.addExpense('Rent', 950)
account.addIncome('Tax', 1000)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())