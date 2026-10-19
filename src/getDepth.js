const getDepth = (array, maxDepth = 1, index = 0) => {
  if (index >= array.length) {
    return maxDepth;
  }
  if (Array.isArray(array[index])) {
    const nasted1 = getDepth(array[index], maxDepth + 1);
    const nasted2 = getDepth(array, maxDepth, index + 1);
    return nasted1 > nasted2 ? nasted1 : nasted2;
  }
  return getDepth(array, maxDepth, index + 1);
};

console.log(getDepth([1, 2, 3]));
// 1

console.log(getDepth([1, [2, 3], 4]));
// 2

console.log(getDepth([1, [2, [3, 4]], 5]));
// 3
console.log(getDepth([1, [2, [3, 4], []], 5]));
// 3

console.log(getDepth([[[]]]));
// 3

console.log(getDepth([]));
// 1

console.log(getDepth([[[1]], 2, [[[[3, []], []], []]]]));

// 6