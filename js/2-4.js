// 1. Возвращаем через фунцкию (по условию задачи) исходною строку string;
// 2. Добавляем условие if;
// 3. Условие - если длинна строки больше чем указано в параметре maxLength, тогда применяем обрезку;
// 4. Обрезка - создали переменную shortString, куда записали строку с методом slice(0, maxLength) - от начала строки и до 40 символов;
// 5. Возвращаем тут же переменную shortString;

function formatString(string, maxLength = 40) {
  // Write code under this line
  if (string.length > maxLength) {
    const shortString = string.slice(0, maxLength) + '...';
    return shortString;
  }
  return string;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'
