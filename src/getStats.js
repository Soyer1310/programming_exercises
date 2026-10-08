const getStats = (...numbers) => {
  let sum = 0;
  let count = numbers.length;

  for (let number of numbers) {
    sum += number;
  }

  return { 
    sum, 
    count 
  }
}

console.log(getStats(4, 8, 15, 16, 23, 42)) 