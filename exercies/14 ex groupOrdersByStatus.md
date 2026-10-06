Есть заказы:

const orders = [
{ id: 1, status: 'paid', customer: 'Anna', total: 2500 },
{ id: 2, status: 'pending', customer: 'Pavel', total: 800 },
{ id: 3, status: 'paid', customer: 'Maria', total: 5200 },
{ id: 4, status: 'cancelled', customer: 'Igor', total: 1800 },
{ id: 5, status: 'paid', customer: 'Elena', total: 1200 },
];

Напиши:

groupOrdersByStatus(orders)

Результат:

{
paid: [1, 3, 5],
pending: [2],
cancelled: [4]
}

То есть аккумулятор — объект, а значениями его свойств являются массивы ID заказов.

Важно: используй именно reduce(), а не filter() внутри каждого статуса.
