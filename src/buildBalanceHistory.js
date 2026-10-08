const transactions = [
  { id: 1, type: 'income',  amount: 5000,  description: 'Salary' },
  { id: 2, type: 'expense', amount: 1200,  description: 'Food' },
  { id: 3, type: 'expense', amount: 800,   description: 'Transport' },
  { id: 4, type: 'income',  amount: 2000,  description: 'Freelance' },
  { id: 5, type: 'expense', amount: 1500,  description: 'Rent' },
];
const initialBalance = 1000;

const buildBalanceHistory = (transactions, initialBalance) => {
  const fn = (acc, transaction) => {
    const isIncome = transaction.type === 'income';
    const change = isIncome ? transaction.amount : -transaction.amount;
    acc[0] += change;
    const balance = acc[0];
    const newTransaction = {
      id: transaction.id,
      description: transaction.description,
      change,
      balance,
      }
    acc.push(newTransaction);
    return acc;
  };
  const [ balance, ...history ] = transactions.reduce(fn, [initialBalance]);
  return history;
};

console.log(buildBalanceHistory(transactions, initialBalance));