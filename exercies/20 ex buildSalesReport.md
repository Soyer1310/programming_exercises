Задача: обработка данных интернет-магазина

Представь, что ты пишешь backend небольшого интернет-магазина. API возвращает список заказов:

const orders = [
{
id: 101,
user: {
id: 1,
name: 'Ivan',
},
status: 'paid',
items: [
{ productId: 10, name: 'Keyboard', price: 5000, quantity: 1 },
{ productId: 11, name: 'Mouse', price: 2000, quantity: 2 },
],
},
{
id: 102,
user: {
id: 2,
name: 'Anna',
},
status: 'cancelled',
items: [
{ productId: 12, name: 'Monitor', price: 30000, quantity: 1 },
],
},
{
id: 103,
user: {
id: 1,
name: 'Ivan',
},
status: 'paid',
items: [
{ productId: 12, name: 'Monitor', price: 30000, quantity: 1 },
{ productId: 11, name: 'Mouse', price: 2000, quantity: 1 },
],
},
{
id: 104,
user: {
id: 3,
name: 'Petr',
},
status: 'pending',
items: [
{ productId: 10, name: 'Keyboard', price: 5000, quantity: 1 },
],
},
{
id: 105,
user: {
id: 2,
name: 'Anna',
},
status: 'paid',
items: [
{ productId: 10, name: 'Keyboard', price: 5000, quantity: 2 },
{ productId: 11, name: 'Mouse', price: 2000, quantity: 1 },
],
},
];

Тебе нужно написать функцию:

const buildSalesReport = (orders) => {
// ...
};

Она должна вернуть:

{
totalRevenue: 49000,

ordersCount: 3,

customers: [
{
id: 1,
name: 'Ivan',
ordersCount: 2,
totalSpent: 39000,
},
{
id: 2,
name: 'Anna',
ordersCount: 1,
totalSpent: 12000,
},
],

products: [
{
productId: 10,
name: 'Keyboard',
quantity: 3,
revenue: 15000,
},
{
productId: 11,
name: 'Mouse',
quantity: 4,
revenue: 8000,
},
{
productId: 12,
name: 'Monitor',
quantity: 1,
revenue: 30000,
},
],
}
Важное ограничение

Учитываются только заказы со статусом paid.

cancelled и pending должны быть полностью исключены.
