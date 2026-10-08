Задача: построить историю изменения баланса

Есть последовательность банковских операций:

const transactions = [
{ id: 1, type: 'income', amount: 5000, description: 'Salary' },
{ id: 2, type: 'expense', amount: 1200, description: 'Food' },
{ id: 3, type: 'expense', amount: 800, description: 'Transport' },
{ id: 4, type: 'income', amount: 2000, description: 'Freelance' },
{ id: 5, type: 'expense', amount: 1500, description: 'Rent' },
];

Начальный баланс:

const initialBalance = 1000;

Нужно написать:

buildBalanceHistory(transactions, initialBalance)

которая вернёт:

[
{
id: 1,
description: 'Salary',
change: 5000,
balance: 6000,
},
{
id: 2,
description: 'Food',
change: -1200,
balance: 4800,
},
{
id: 3,
description: 'Transport',
change: -800,
balance: 4000,
},
{
id: 4,
description: 'Freelance',
change: 2000,
balance: 6000,
},
{
id: 5,
description: 'Rent',
change: -1500,
balance: 4500,
},
]
