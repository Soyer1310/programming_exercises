const transactions = [
  { id: 1, title: 'Продукты', amount: 2500, category: 'Еда', type: 'expense' },
  { id: 2, title: 'Зарплата', amount: 80000, category: 'Доход', type: 'income' },
  { id: 3, title: 'Кофе', amount: 350, category: 'Еда', type: 'expense' },
  { id: 4, title: 'Такси', amount: 700, category: 'Транспорт', type: 'expense' },
  { id: 5, title: 'Фриланс', amount: 15000, category: 'Доход', type: 'income' },
  { id: 6, title: 'Бензин', amount: 3000, category: 'Транспорт', type: 'expense' },
  { id: 7, title: 'Кино', amount: 1200, category: 'Развлечения', type: 'expense' },
  { id: 8, title: 'Ресторан', amount: 2800, category: 'Еда', type: 'expense' },
  { id: 9, title: 'Возврат', amount: 500, category: 'Прочее', type: 'income' },
  { id: 10, title: 'Подписка', amount: 600, category: 'Развлечения', type: 'expense' },
];
/**
 * @param {Array} transactions 
 * @param {Object[]} transactions
 */

const getTotalAmount = (transactions) => transactions
.reduce((acc, transaction) => acc + transaction.amount, 0);

const getTransactionsByType = (transactions, type) => transactions.filter(transaction => transaction.type === type);

const getTotalByType = (transactions, type) => {
  const transactionsByTipe = getTransactionsByType(transactions, type);
  return getTotalAmount(transactionsByTipe);
};

const getTransactionsByCategory = (transactions, category) => transactions
.filter(transaction => transaction.category === category);

const getAverageAmount = (transactions) => {
  if (transactions.length <= 0) return 0; 
  const totalAmount = getTotalAmount(transactions);
  return totalAmount / transactions.length;
}

const getExpenseReport = (transactions) => {
  const totalIncome = getTotalByType(transactions, 'income');
  const totalExpenses = getTotalByType(transactions, 'expense');
  const balance = totalIncome - totalExpenses;
  const expenseCount = getTransactionsByType(transactions, 'expense').length;

  return {
    totalIncome,
    totalExpenses,
    balance,
    expenseCount,
  }
};

console.log(getTotalAmount(transactions));
console.log(getTransactionsByType(transactions, 'expense'));
console.log(getTotalByType(transactions, 'expense'));
console.log(getTransactionsByCategory(transactions, 'Транспорт'));
console.log(getAverageAmount(transactions));
console.log(getExpenseReport(transactions));