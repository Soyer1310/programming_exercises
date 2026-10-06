const calculateTotal = (...numbers) => {
  let resalt = 0;
  for (let num of numbers) {
    result += num;
  }
  return resalt;
};

const prices = [120, 250, 80];
const additionalPrices = [50, 100];

console.log(calculateTotal(...prices, ...additionalPrices));