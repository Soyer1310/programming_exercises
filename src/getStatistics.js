const users = [
  { name: 'Anna', age: 25 },
  { name: 'Pavel', age: 17 },
  { name: 'Maria', age: 31 },
  { name: 'Igor', age: 17 },
  { name: 'Elena', age: 42 },
];

// Она должна вернуть:

// {
//   count: 5,
//   adults: 3,
//   minors: 2,
//   totalAge: 132
// }

const getStatistics = (users) => {
  const initialValue = {
    count: 0,
    adults: 0,
    minors: 0,
    totalAge: 0,
  }
  const fn = (acc, user) => {
    acc.count += 1;
    if (user.age >= 18) {
      acc.adults += 1;
    } else {
      acc.minors += 1;
    }
    acc.totalAge += user.age;
    return acc;
  }
  return users.reduce(fn, initialValue);
};

console.log(getStatistics(users));