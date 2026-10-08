задача

Есть пользователи:

const users = [
{ name: 'Ivan', age: 25, city: 'Moscow', salary: 120000 },
{ name: 'Anna', age: 31, city: 'SPb', salary: 150000 },
{ name: 'Petr', age: 17, city: 'Moscow', salary: 50000 },
{ name: 'Maria', age: 28, city: 'Moscow', salary: 130000 },
{ name: 'Alex', age: 34, city: 'SPb', salary: 180000 },
{ name: 'Olga', age: 16, city: 'Moscow', salary: 40000 },
];

Нужно получить среднюю зарплату совершеннолетних пользователей из Москвы, но результат должен быть объектом:

{
count: 2,
averageSalary: 125000,
users: ['Ivan', 'Maria']
}
