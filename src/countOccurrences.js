const countOccurrences = (numbers, target, index = 0) => {
  if (index >= numbers.length) {
    return 0;
  }
  if (numbers[index] === target) {
    return 1 + countOccurrences(numbers, target, index + 1);
  }
  return countOccurrences(numbers, target, index + 1);
};

console.log(countOccurrences([1, 2, 1, 3, 1], 1));
console.log(countOccurrences([5, 5, 5], 5));      
console.log(countOccurrences([1, 2, 3], 9));       
console.log(countOccurrences([], 1));          

// countOccurrences([1, 2, 1, 3, 1], 1, 0);
// 1 + countOccurrences([1, 2, 1, 3, 1], 1, 1);
// 1 + countOccurrences([1, 2, 1, 3, 1], 1, 1);





