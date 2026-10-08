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

const getTotal = (items) => items.reduce((acc, item) => acc + item.price * item.quantity, 0);
const getPaidOrderSummary = (orders) => {
  return orders
    .filter(order => order.status === 'paid')
    .map(order => ({
      id: order.id, 
      customer: order.customer, 
      total: getTotal(order.items)}));
};

console.log(getPaidOrderSummary(orders));