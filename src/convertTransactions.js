const convertTransactions = (transactions) => {
  return transactions.map(({ id, type, amount, category, }) => {
    let operation;
    switch (type) {
      case 'income': operation = '+'; 
        break;
      case 'expense': operation = '-';
        break;
      default: throw Error (`Unknown type of operation! (${operation})`)
    }
    const description = `${category}: ${operation}${amount}`
    return {
      id,
      category,
      amount,
      operation,
      description,
     }
  }
  ) 
}

const transactions = [
  { id: 1, type: 'income', amount: 1500, category: 'salary' },
  { id: 2, type: 'expense', amount: 200, category: 'food' },
  { id: 3, type: 'expense', amount: 100, category: 'transport' },
  { id: 4, type: 'income', amount: 500, category: 'freelance' },
  { id: 5, type: 'expense', amount: 300, category: 'rent' },
];

const users = [
  { id: 1, name: 'Anna', scores: [10, 20] },
  { id: 2, name: 'Pavel', scores: [15, 25] },
];

const result = users.map(user => ({
  ...user,
  name: user.name.toUpperCase(),
}));

result[0].scores.push(30);
result[1].name = 'PETR';

console.log(users);
console.log(result);