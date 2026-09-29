const getAdults = (users) => {
  const adults = [];
  users.forEach(user => {
    if (user.age >= 18) {
      adults.push(user.name)
    }
  });
  return adults;
}

const users = [
  { name: 'Artem', age: 35 },
  { name: 'John', age: 20 },
  { name: 'Mike', age: 17 },
];

console.log(getAdults(users));

