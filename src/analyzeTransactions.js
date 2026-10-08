const transactions = [
  { id: 1, type: 'income', category: 'salary', amount: 120000 },
  { id: 2, type: 'expense', category: 'food', amount: 8500 },
  { id: 3, type: 'expense', category: 'transport', amount: 3200 },
  { id: 4, type: 'income', category: 'freelance', amount: 25000 },
  { id: 5, type: 'expense', category: 'food', amount: 6400 },
  { id: 6, type: 'expense', category: 'games', amount: 3500 },
  { id: 7, type: 'income', category: 'salary', amount: 120000 },
  { id: 8, type: 'expense', category: 'transport', amount: 2800 },
  { id: 9, type: 'expense', category: 'games', amount: 1200 },
  ];


const analyzeTransactions = (transactions) => {
const statistics = {
  balance: 0,
  
  income: {
  total: 0,
  count: 0,
  },
  
  expenses: {
  total: 0,
  count: 0,
  },
  
  expensesByCategory: {},
  
  largestExpense: {
  id: null,
  category: '',
  amount: 0,
  }
  }
  const fn = (acc, transaction) => {
    if (transaction.type === 'income') {
      acc.balance += transaction.amount;
      acc.income.total += transaction.amount;
      acc.income.count += 1;
    }
    else if (transaction.type === 'expense') {
      acc.balance -= transaction.amount;
      acc.expenses.total += transaction.amount;
      acc.expenses.count += 1;
      if (!Object.hasOwn(acc.expensesByCategory, transaction.category)) {
        acc.expensesByCategory[transaction.category] = 0;
      }
      acc.expensesByCategory[transaction.category] += transaction.amount;
      if (transaction.amount > acc.largestExpense.amount) {
        acc.largestExpense.id = transaction.id;
        acc.largestExpense.category = transaction.category;
        acc.largestExpense.amount = transaction.amount;
      }
    }
    return acc;
  } 
  return transactions.reduce(fn, statistics);
};

console.log(analyzeTransactions(transactions));