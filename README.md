## Задача 2-1

#### Использование for

Напиши функцию  `getItemsString(array)`, которая получает массив и возвращает строку, полученную из объединения (конкатенации) строк в формате  `${номер элемента} - ${значение элемента}\n`  , где  `\n`  - спецсимвол переноса.

Нумерация должна начинаться с  `1`. К примеру для первого элемента массива  `['Mango', 'Poly', 'Ajax']`  с индексом  `0`  будет выведено  `'1 - Mango'`, а для индекса  `2`  выведет  `'3 - Ajax'`.

Используйте вспомогательную переменную  `result`  для добавления (конкатенации) строк внутри цикла  `for`

    const getItemsString = function(array) {
      'use strict';
      // Write code under this line
          let result = '';
    
        for (let i = 0; i < array.length; i += 1) {
          result += `${i + 1} - ${array[i]}\n`;
        }
        return result; 
    };

## Задача 2-2

#### Подсчет стоимости гравировки украшений

Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию  `calculateEngravingPrice(message = "", pricePerWord = 0)`  принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

Для решения этой задачи не используйте циклы. Т.е. никаких  `for`,  `while`,  `do while`,  `for of`,  `for in`,  `forEach`  или функциональных методов.

```javascript
const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
  message.split(' ').length * pricePerWord; // Write code in this line

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120

console.log(calculateEngravingPrice('Uno', 100)); // 100

```
