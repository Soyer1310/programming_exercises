1. Напиши функцию createBankAccount(initialBalance)

Она должна создавать «банковский счёт» с внутренним балансом.

Например:

const account = createBankAccount(1000);

account.deposit(500); // 1500
account.withdraw(300); // 1200
account.getBalance(); // 1200
Требования:

Функция должна возвращать объект с тремя методами:

deposit(amount)
withdraw(amount)
getBalance()

При этом balance должен находиться внутри createBankAccount и быть недоступным напрямую снаружи.

То есть такого быть не должно:

account.balance

Баланс должен изменяться только через deposit() и withdraw().

Решение в файле createBankAccount.js
