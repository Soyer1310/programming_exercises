const doubleNested = (numbers, index = 0, dubled = []) => {
  if (index >= numbers.length) {
    return [...dubled];
  }
  if (Array.isArray(numbers[index])) {
    return [...dubled, doubleNested(numbers[index], 0), ...doubleNested(numbers, index + 1)];
  }
  return [...dubled, numbers[index] * 2, ...doubleNested(numbers, index + 1)];
};

console.log(doubleNested([1, [2, 3], 4]));
// [2, [4, 6], 8]

console.log(doubleNested([1, [2, [3, 4]], 5]));
// [2, [4, [6, 8]], 10]

console.log(doubleNested([]));
// []