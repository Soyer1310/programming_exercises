// Solution
const createBankAccount = (initialBalance) => {
  let balance = initialBalance;
  return {
    deposit: amount => balance += amount,
    withdraw: amount => balance -= amount,
    getBalance: () => balance,
  }
}
// Examples of use
const account1 = createBankAccount(1000);

console.log(account1.deposit(500));
console.log(account1.withdraw(300));
console.log(account1.balance());

const account2 = createBankAccount(2500);

console.log(account2.deposit(450));
console.log(account2.withdraw(740));
console.log(account2.balance());