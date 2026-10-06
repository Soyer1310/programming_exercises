const buildMessage = (name, ...messages) => {
  return `${name}: ${messages.join(' | ')}`
}

console.log(buildMessage('Artem', 'Hello', 'How are you?', 'Goodbye'));
console.log(buildMessage('Artem', 'Hello'));
console.log(buildMessage('Artem'));
