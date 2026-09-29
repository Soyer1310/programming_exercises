// Solution
const createUser = (name, initialBalance) => {
  let userBalance = initialBalance;
  return {
    getName: () => name, 
    getBalance: () => userBalance, 
    deposit: amount => { 
      userBalance += amount 
    },
    withdraw: amount => {
      userBalance -= amount 
    },
  }
}

//examples of use
const user = createUser('Artem', 1000);

user.getName();       // 'Artem'
user.getBalance();    // 1000

user.deposit(500);
user.getBalance();    // 1500

user.withdraw(300);
user.getBalance();    // 1200