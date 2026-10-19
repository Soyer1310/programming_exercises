const flattenNested = (numbers, index = 0) => {
  if (index >= numbers.length) {
    return [];
  }
  if (Array.isArray(numbers[index])) {
    return [...flattenNested(numbers[index], 0), ...flattenNested(numbers, index + 1)];
  }
  return [numbers[index], ...flattenNested(numbers, index + 1)]
};

console.log(flattenNested([1, [2, 3], 4]));
// [1, 2, 3, 4]

console.log(flattenNested([1, [2, [3, 4]], 5]));
// [1, 2, 3, 4, 5]

console.log(flattenNested([[[]], [1, [2]], 3]));
// [1, 2, 3]

console.log(flattenNested([]));
// []