Yапиши функцию getStatistics(users)

для:

const users = [
{ name: 'Anna', age: 25 },
{ name: 'Pavel', age: 17 },
{ name: 'Maria', age: 31 },
{ name: 'Igor', age: 17 },
{ name: 'Elena', age: 42 },
];

Она должна вернуть:

{
count: 5,
adults: 3,
minors: 2,
totalAge: 132
}

Здесь аккумулятор должен быть объектом:

{
count: 0,
adults: 0,
minors: 0,
totalAge: 0
}

Каждая итерация должна обновлять его.

Обрати внимание: здесь тебе придётся решить, как именно изменять аккумулятор.
