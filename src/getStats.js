const getStats = (...numbers) => {
  let sum = 0;
  let count = 0;

  for (let number of numbers) {
    sum += number;
    count += 1;
  }

  return { 
    sum, 
    count 
  }
}

console.log(getStats(4, 8, 15, 16, 23, 42)) 