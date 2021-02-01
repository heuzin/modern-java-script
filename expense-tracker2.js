const account = {
    name: 'Matheus',
    expenses: [],
    income: [],
    addExpense(description, amount) {
        this.expenses.push({
            description,
            amount
        })
    },
    addIncome(description, amount) {
        this.income.push({
            description,
            amount
        })
    },
    getSummary() {
        let totalExpenses = 0;
        let totalIncome = 0

        this.expenses.forEach((expense) => {
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })

        const total = totalIncome - totalExpenses

        return `${this.name} has a balance of $${total}. $${totalIncome} in income and $${totalExpenses} in expenses.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Rent', 950)
account.addIncome('job', 600)

console.log(account.getSummary())