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

const getExpensesByCategory = (transactions) => {
  return transactions.reduce((acc, transaction) => {
    if (Object.hasOwn(acc, transaction.category)) {
      acc[transaction.category] += transaction.amount;
    } else {
      acc[transaction.category] = transaction.amount;
    }
    return acc;
  }, {})
};

const createAmountFilter = (minAmount) => (transaction) => transaction.amount >= minAmount;

const isLargeTransaction = createAmountFilter(2000);

const filtredTransactions = transactions.filter(isLargeTransaction);

const getLargeExpenseTitles = (transactions, minAmount) => {
  const isLargeTransaction = createAmountFilter(minAmount);
  return transactions
    .filter(transaction => transaction.type === 'expense')
    .filter(isLargeTransaction)
    .map(transaction => transaction.title);
};

const formatExpenseReport = (report) => {
  return Object.entries(report)
      .reduce((acc, [name, value]) => `${acc}${name}: ${value}\n`, '').trim();
};

const printExpenseReport = (report) => {
  console.log(report);
}

printExpenseReport(formatExpenseReport(getExpenseReport(transactions)));

// Чистые функции: getTotalAmount, getTransactionsByType, getTotalByType, getTransactionsByCategory, getAverageAmount, getExpenseReport, getExpensesByCategory, createAmountFilter, getLargeExpenseTitles, formatExpenseReport;
// выполняет побочные эффекты только printExpenseReport.
// Ряд функций использует другие функции, например getTotalByType, getAverageAmount, getExpenseReport, getLargeExpenseTitles. Это увеличивает выразительность кода за счёт создания уровней абстракции и избавляет от дублирования.
// В функции getAverageAmount я не стал выделять в отдельную функцию деление одного числа на другое, хотя возможно было создать абстракцию типа divide, также в getExpenseReport не создана отдельная абстракция для вычисления balance, так как вышеупомянутые абстракии скрыли бы и так максимально простые и очевидные операции, что никак не отразилось бы на выразительности и качестве кода
// В getLargeExpenseTitles можно было бы выделить две абстракции для фильтрации транзакций типа expense и для получения title, но я решил уже этого не делать, так как поленился, хотя такие абстракции могли бы оказаться полезными для дальнейшего развития проекта, так как наверняка могли потребоваться в будующих вычислениях и новых функциях. Но я счёл это не критичным, так как код в getLargeExpenseTitles и так отлично читается и эти абстракции не сделали бы его намного более выразительным.