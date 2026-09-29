const createCounter = (countStart) => {
  let counter = countStart;
  return {
    increment: () => counter += 1,
    decrement: () => counter -= 1,
    getValue: () => counter,
    reset: () => counter = countStart,
  }
};

//examples of use
const counter1 = createCounter(50);
const counter2 = createCounter(100);


console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter1.getValue())
console.log(counter1.decrement())
console.log(counter1.getValue())
console.log(counter2.getValue())

console.log(counter1.reset())
console.log(counter1.getValue())
