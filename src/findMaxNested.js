const findMaxNested = (numbers, max = -Infinity, index = 0) => {
  if (index >= numbers.length) {
    return max;
  }
  if (Array.isArray(numbers[index])) {
    const nestedMax = findMaxNested(numbers[index], max, 0);
    return findMaxNested(numbers, nestedMax, index + 1);
  }
  if (numbers[index] > max) {
    return findMaxNested(numbers, numbers[index], index + 1);
  }
  return findMaxNested(numbers, max, index + 1);
};


console.log(findMaxNested([1, [8, [3, 12]], 13])); // 13
console.log(findMaxNested([[-10, -3], [-7]])); // -3
console.log(findMaxNested([4])); // 4
console.log(findMaxNested([]));
