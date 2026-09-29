Задача: createCounter

Создай функцию:

const createCounter = (initialValue = 0) => {
// ...
};

Она должна возвращать объект с четырьмя методами:

const counter = createCounter(10);

counter.increment(); // 11
counter.increment(); // 12
counter.decrement(); // 11
counter.getValue(); // 11
Условия

Переменная со значением счётчика должна быть приватной:

const counter = createCounter(10);

counter.value; // такого свойства быть не должно

Но все четыре метода должны работать с одной и той же переменной:

             ┌──────────────────────┐
             │  lexical environment │
             │                      │
             │  value = 10          │
             └──────────┬───────────┘
                        │
          ┌─────────────┼─────────────┐
          ↓             ↓             ↓
    increment()   decrement()    getValue()

При этом:

const counter1 = createCounter(0);
const counter2 = createCounter(100);

counter1.increment();
counter1.increment();

console.log(counter1.getValue()); // 2
console.log(counter2.getValue()); // 100
Дополнительное усложнение

Добавь метод:

reset()

Он должен возвращать счётчик к тому значению, которое было передано при создании:

const counter = createCounter(50);

counter.increment(); // 51
counter.increment(); // 52
counter.reset(); // 50
counter.getValue(); // 50
