Дан массив заказов:

const orders = [
{
id: 1,
status: 'paid',
customer: 'Anna',
total: 2500,
items: ['keyboard', 'mouse'],
},
{
id: 2,
status: 'pending',
customer: 'Pavel',
total: 800,
items: ['mouse'],
},
{
id: 3,
status: 'paid',
customer: 'Maria',
total: 5200,
items: ['monitor'],
},
{
id: 4,
status: 'cancelled',
customer: 'Igor',
total: 1800,
items: ['keyboard'],
},
{
id: 5,
status: 'paid',
customer: 'Elena',
total: 1200,
items: [],
},
];

Напиши функцию findOrders(orders, options), которая отбирает заказы по необязательным критериям:

status — нужный статус заказа;

minTotal — минимальная сумма;

hasItems — если true, нужны заказы хотя бы с одним товаром; если false, нужны заказы без товаров;

если критерий не передан, он не должен ограничивать результат.

Например:

findOrders(orders, { status: 'paid', minTotal: 2000 });

Должны остаться оплаченные заказы стоимостью не менее 2000.
