Есть массив транзакций:

const transactions = [
{ id: 1, type: 'income', amount: 1500, category: 'salary' },
{ id: 2, type: 'expense', amount: 200, category: 'food' },
{ id: 3, type: 'expense', amount: 100, category: 'transport' },
{ id: 4, type: 'income', amount: 500, category: 'freelance' },
{ id: 5, type: 'expense', amount: 300, category: 'rent' },
];

Нужно получить новый массив, где каждая транзакция преобразована в такой объект:

{
id: 1,
category: 'salary',
amount: 1500,
operation: '+',
description: 'salary: +1500'
}

Для расхода:

{
id: 2,
category: 'food',
amount: 200,
operation: '-',
description: 'food: -200'
}
Ограничения

Используй один map() по transactions.

Внутри него:

type: 'income' → operation: '+'
type: 'expense' → operation: '-'
description сформируй динамически;
исходный массив и его объекты не изменяй.
