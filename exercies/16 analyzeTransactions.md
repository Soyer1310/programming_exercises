Задача: анализатор банковских операций

Представь, что мы пишем небольшую часть финансового приложения.

Есть операции пользователя:

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

Нужно написать:

analyzeTransactions(transactions)

которая возвращает один объект со всей статистикой:

{
balance: 238100,

income: {
total: 265000,
count: 3,
},

expenses: {
total: 25600,
count: 6,
},

expensesByCategory: {
food: 14900,
transport: 6000,
games: 4700,
},

largestExpense: {
id: 5,
category: 'food',
amount: 6400,
}
}
