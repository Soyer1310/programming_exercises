Первый аргумент отдельно, остальные — в массив

Напиши функцию buildMessage, которая принимает первым аргументом имя пользователя, а все оставшиеся аргументы считает отдельными сообщениями.

Функция должна возвращать строку в формате:

Artem: Hello | How are you? | Goodbye

Примеры:

buildMessage('Artem', 'Hello', 'How are you?', 'Goodbye');
// 'Artem: Hello | How are you? | Goodbye'

buildMessage('John', 'Hi');
// 'John: Hi'

buildMessage('Mike');
// 'Mike: '

Условия:

Имя должно попасть в отдельный параметр name.

Все остальные аргументы должны попасть в массив messages с помощью rest.

Для объединения сообщений используй join().
