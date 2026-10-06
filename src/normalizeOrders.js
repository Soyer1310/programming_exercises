const capitalize = (...strings) => strings.map(string => {
  const trimmedString = string.trim();
  if (trimmedString === '') return '';
  return `${trimmedString[0].toUpperCase()}${trimmedString.slice(1).toLowerCase()}`;
});

const normalizeName = ({ firstName, lastName }) => capitalize(firstName, lastName).join(' ');
const calculateTotalPrice = (items) => items.reduce((acc, { price, quantity }) => {
  if (Number.isNaN(+price) || +price <= 0) throw Error(`Format of the price is incorrect or the price is equal or under 0!`);
  return acc + price * quantity
}, 0);
const normalizeOrders = (orders) => {
  return orders.map(order => {
    return {
      id: order.id,
      customerName: normalizeName(order.customer),
      total: calculateTotalPrice(order.items),
      status: order.status.toLowerCase(),
      isPaid: order.status.toLowerCase() === 'paid',
      itemNames: order.items.map(item => item.name),
      }
  }) 
};

const orders = [
  {
  id: 101,
  customer: { firstName: ' anna', lastName: 'IVANOVA ' },
  items: [
  { name: 'Keyboard', price: '100', quantity: 1 },
  { name: 'Mouse', price: '50', quantity: 2 },
  ],
  status: 'PAID',
  },
  {
  id: 102,
  customer: { firstName: 'PAVEL', lastName: ' petrov' },
  items: [
  { name: 'Monitor', price: '300', quantity: 1 },
  ],
  status: 'pending',
  },
  {
  id: 103,
  customer: { firstName: 'Maria', lastName: 'Sidorova' },
  items: [],
  status: 'CANCELLED',
  },
  ];

console.log(normalizeOrders(orders));