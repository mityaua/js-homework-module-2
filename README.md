## Задача 2-1

#### Использование for

Напиши функцию  `getItemsString(array)`, которая получает массив и возвращает строку, полученную из объединения (конкатенации) строк в формате  `${номер элемента} - ${значение элемента}\n`  , где  `\n`  - спецсимвол переноса.

Нумерация должна начинаться с  `1`. К примеру для первого элемента массива  `['Mango', 'Poly', 'Ajax']`  с индексом  `0`  будет выведено  `'1 - Mango'`, а для индекса  `2`  выведет  `'3 - Ajax'`.

Используйте вспомогательную переменную  `result`  для добавления (конкатенации) строк внутри цикла  `for`


## Задача 2-2

#### Подсчет стоимости гравировки украшений

Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию  `calculateEngravingPrice(message = "", pricePerWord = 0)`  принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

Для решения этой задачи не используйте циклы. Т.е. никаких  `for`,  `while`,  `do while`,  `for of`,  `for in`,  `forEach`  или функциональных методов.


## Задача 2-3

#### Поиск самого длинного слово в строке с пробелами

Напиши функцию  `findLongestWord(string = "")`, которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

```javascript
function findLongestWord(string = '') {
  // Write code under this line
  const stringSplit = string.split(' ');
  let longestWord = '';

  for (let word of stringSplit) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'

```



## Задача 2-4

#### Форматирование строки в зависимости от длинны строки

Напиши функцию  `formatString(string, maxLength = 40)`  которая принимает строку и форматирует ее если необходимо.

-   Если длина строки не превышает  `maxLength`, функция возвращает ее в исходном виде.
-   Если длина больше  `maxLength`, то функция обрезает строку до размера  `maxLength`  символов и добавляет в конец строки троеточие  `...`, после чего возвращает укороченную версию.

```javascript
function formatString (string, maxLength = 40) {
  // Write code under this line
  if (string.length <= maxLength) {
    return string;
  } else {
    return string.slice(0, maxLength) + '...';
  }
}

//console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

//console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

//console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'
```

## Задача 2-5

#### Функция предикат

Функция предикат возвращает true или false

Напиши функцию  `checkForSpam(message)`, принимающую 1 параметр  `message`  - строку. Функция проверяет ее на содержание слов  `spam`  и  `sale`. Если нашли запрещенное слово то функция возвращает  `true`, если запрещенных слов нет функция возвращает  `false`. Слова в строке могут быть в произвольном регистре.

```javascript
function checkForSpam (str) { 
  'use strict';
  // Write code under this line
    let checkSpam = str.toLowerCase();
  return checkSpam.includes('spam') || checkSpam.includes('sale');
}

//console.log(checkForSpam('Latest technology news')); // false

//console.log(checkForSpam('JavaScript weekly newsletter')); // false

//console.log(checkForSpam('Get best sale offers now!')); // true

//console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
```
