const sumNested = (numbers, index = 0) => {
  if (index >= numbers.length) {
    return 0;
  }
  if (typeof numbers[index] === 'number') {
    return numbers[index] + sumNested(numbers, index + 1);
  }
  return sumNested(numbers[index], 0) + sumNested(numbers, index + 1);
};

console.log(sumNested([1, 2, 3]));                 
console.log(sumNested([1, [2, 3], 4]));            
console.log(sumNested([1, [2, [3, 4]], 5]));       
console.log(sumNested([[], [1, [2, []]], 3]));     
console.log(sumNested([]));