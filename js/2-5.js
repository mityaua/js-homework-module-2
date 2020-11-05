// 1. Создаем переменную stopWord для приведения всех слов в строке в нижний регистр
// 2. Создаем переменную, куда записываем булевую проверку на слово 'spam' и 'sale' через метод includes
// 3. Делаем возврат функции

function checkForSpam(str) {
  'use strict';
  // Write code under this line
  const stopWord = str.toLowerCase();
  const checkString = stopWord.includes('spam') || stopWord.includes('sale');

  return checkString;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
