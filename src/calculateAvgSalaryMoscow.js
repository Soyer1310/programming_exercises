
const users = [
  { name: 'Ivan', age: 25, city: 'Moscow', salary: 120000 },
  { name: 'Anna', age: 31, city: 'SPb', salary: 150000 },
  { name: 'Petr', age: 17, city: 'Moscow', salary: 50000 },
  { name: 'Maria', age: 28, city: 'Moscow', salary: 130000 },
  { name: 'Alex', age: 34, city: 'SPb', salary: 180000 },
  { name: 'Olga', age: 16, city: 'Moscow', salary: 40000 },
];

const calculateSalarisData = (acc, user) => {
  acc.count += 1;
  acc.sumSalary += user.salary;
  acc.users.push(user.name);
  return acc;
};

const calculateAvgSalaryMoscow = (users) => {
  const { sumSalary, ...avdSalaryMoscow } = users
   .filter(user => user.city === 'Moscow')
   .filter(user => user.age >= 18)
   .reduce(calculateSalarisData, {
    sumSalary: 0,
    count: 0,
    users: []});
    avdSalaryMoscow.averageSalary = sumSalary / avdSalaryMoscow.count;
    return avdSalaryMoscow;
};

console.log(calculateAvgSalaryMoscow(users));