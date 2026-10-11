const sumDigits = (num) => {
  if (num < 10) {
    return num;
  }
  return num % 10 + sumDigits(Math.floor(num / 10));
};

console.log(sumDigits(11));
console.log(sumDigits(1234));
console.log(sumDigits(1));
console.log(sumDigits(0));


// sumDigits(905);
// 5 + sumDigits(90);
// 5 + 0 + sumDigits(9);
// 5 + 0 + 9