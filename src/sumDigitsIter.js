const sumDigitsIter = (n) => {
  const iter = (rest, acc) => {
    if (rest < 10) {
      return acc + rest;
    }
    return iter(Math.floor(rest / 10), acc + (rest % 10))
  }
  return iter(Math.floor(n / 10), n % 10)
};

console.log(sumDigitsIter(5)); // 5
console.log(sumDigitsIter(123)); // 6 
console.log(sumDigitsIter(5831)); // 17
console.log(sumDigitsIter(9004)); // 13
console.log(0 / 5); 
console.log(5 / -0); 

