Задача — обработка заказов интернет-магазина

Есть массив заказов:

const orders = [
{
id: 1,
customer: 'Ivan',
status: 'paid',
items: [
{ name: 'Keyboard', price: 5000, quantity: 1 },
{ name: 'Mouse', price: 2000, quantity: 2 },
],
},
{
id: 2,
customer: 'Anna',
status: 'cancelled',
items: [
{ name: 'Monitor', price: 30000, quantity: 1 },
],
},
{
id: 3,
customer: 'Petr',
status: 'paid',
items: [
{ name: 'Headphones', price: 7000, quantity: 1 },
{ name: 'Mouse', price: 2000, quantity: 1 },
],
},
{
id: 4,
customer: 'Maria',
status: 'pending',
items: [
{ name: 'Keyboard', price: 5000, quantity: 1 },
],
},
{
id: 5,
customer: 'Alex',
status: 'paid',
items: [
{ name: 'Monitor', price: 30000, quantity: 1 },
{ name: 'Mouse', price: 2000, quantity: 1 },
],
},
];

Напиши функцию:

const getPaidOrderSummary = (orders) => {
// ...
};

Она должна вернуть массив объектов только для оплаченных (paid) заказов, причём каждый объект должен иметь вид:

{
id: 1,
customer: 'Ivan',
total: 9000
}

То есть для каждого оплаченного заказа нужно вычислить:

total = сумма(price × quantity) всех товаров заказа

Для приведённых данных результат должен быть:

[
{ id: 1, customer: 'Ivan', total: 9000 },
{ id: 3, customer: 'Petr', total: 9000 },
{ id: 5, customer: 'Alex', total: 32000 },
]
Но есть ограничения

Попробуй решить именно через цепочку операций:

filter()
map()
reduce()

Циклы (for, for...of, forEach) не используй.

И главное: не делай всё внутри одного map().
