const createCounter = (countStart) => {
  let counter = countStart;
  return {
    increment: () => counter += 1,
    increment: () => counter -= 1,
    getValue: () => counter,
    reset: () => counter = countStart,
  }
};

const counter = createCounter(50);