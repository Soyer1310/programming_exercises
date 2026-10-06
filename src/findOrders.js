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

const findOrders = (orders, options) => {
  const { status, minTotal = 0, hasItems } = options;
  return orders.filter(order => {
    const isOrderHasItems = order.items.length > 0;
    return (status === undefined || order.status === status) 
      && order.total >= minTotal 
      && (hasItems === undefined || isOrderHasItems === hasItems);
  })
};

console.log(findOrders(orders, { minTotal: 1500 }));