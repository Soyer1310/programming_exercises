Задача: createUser

Напиши функцию:

const createUser = (name, initialBalance) => {
// ...
};

Она должна возвращать объект с 4 методами: getName, getBalance, deposit & withdraw:

const user = createUser('Artem', 1000);

user.getName(); // 'Artem'
user.getBalance(); // 1000

user.deposit(500);
user.getBalance(); // 1500

user.withdraw(300);
user.getBalance(); // 1200

Условия:
name и balance должны находиться внутри createUser.
Их нельзя хранить в возвращаемом объекте напрямую:
return {
name,
balance,
// ...
};

Так делать нельзя.

Методы getName, getBalance, deposit, withdraw должны получать доступ к этим переменным через замыкание.
balance должен изменяться при deposit() и withdraw().
Создание двух пользователей должно создавать независимые состояния:
const user1 = createUser('Artem', 1000);
const user2 = createUser('John', 500);

user1.deposit(200);

console.log(user1.getBalance()); // 1200
console.log(user2.getBalance()); // 500
Дополнительный вопрос

После написания кода объясни своими словами:

Почему user1.getBalance() может получить доступ к balance, хотя функция createUser() уже завершила выполнение?

И ещё один вопрос посложнее:

const user1 = createUser('Artem', 1000);
const user2 = createUser('John', 500);

Почему изменение balance через user1.deposit(100) не изменяет баланс user2?
