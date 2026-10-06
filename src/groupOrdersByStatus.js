const orders = [
  { id: 1, status: 'paid', customer: 'Anna', total: 2500 },
  { id: 2, status: 'pending', customer: 'Pavel', total: 800 },
  { id: 3, status: 'paid', customer: 'Maria', total: 5200 },
  { id: 4, status: 'cancelled', customer: 'Igor', total: 1800 },
  { id: 5, status: 'paid', customer: 'Elena', total: 1200 },
];

const groupOrdersByStatus = (orders) => {
  const fn = (acc, order) => {
    if (!Object.hasOwn(acc, order.status)) {
      acc[order.status] = [];
    }
    acc[order.status].push(order.id);
    return acc;
  };
  return orders.reduce(fn, {});
};

console.log(groupOrdersByStatus(orders));