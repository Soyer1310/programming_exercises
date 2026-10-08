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

// {
//   totalRevenue: 49000,

  // ordersCount: 3,

  // customers: [
  //   {
  //     id: 1,
  //     name: 'Ivan',
  //     ordersCount: 2,
  //     totalSpent: 39000,
  //   },
  //   {
  //     id: 2,
  //     name: 'Anna',
  //     ordersCount: 1,
  //     totalSpent: 12000,
  //   },
  // ],

//   products: [
//     {
//       productId: 10,
//       name: 'Keyboard',
//       quantity: 3,
//       revenue: 15000,
//     },
//     {
//       productId: 11,
//       name: 'Mouse',
//       quantity: 4,
//       revenue: 8000,
//     },
//     {
//       productId: 12,
//       name: 'Monitor',
//       quantity: 1,
//       revenue: 30000,
//     },
//   ],
// }

const calculateOrderTotal = (items) => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

const buildCustomer = (acc, order) => {
  const user = acc.find(user => user.id === order.user.id);
  if (!user) {
    acc.push({
      id: order.user.id,
      name: order.user.name,
      ordersCount: 1,
      totalSpent: calculateOrderTotal(order.items),
    })
  } else {
    user.ordersCount += 1;
    user.totalSpent += calculateOrderTotal(order.items);
  }
  return acc;
};

const buildProduct = (acc, product) => {
  const item = acc.find(item => item.productId === product.productId);
  if (!item) {
    acc.push({
      productId: product.productId,
      name: product.name,
      quantity: product.quantity,
      revenue: product.quantity * product.price,
    })
  } else {
    item.quantity += product.quantity;
    item.revenue += product.quantity * product.price;
  }
  return acc;
};

const buildSalesReport = (orders) => {
  const paidOrders = orders.filter(order => order.status === 'paid');
  const customers = paidOrders.reduce(buildCustomer, []);
  const products = paidOrders
  .flatMap(order => order.items)
  .reduce(buildProduct, []);
  const totalRevenue = products.reduce((acc, product) => acc + product.revenue, 0);
  const ordersCount = paidOrders.length;
  return { totalRevenue, ordersCount, customers, products };
};

console.log(buildSalesReport(orders));