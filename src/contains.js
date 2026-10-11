const contains = (numbers, target) => {
  const [first, ...rest] = numbers;
  if (first === target) {
    return true;
  }
  if (rest.length === 0) {
    return false;
  }
  return contains(rest, target);
};

console.log(contains([4, 8, 15, 16, 23, 42], 15));

