// 1. Обьявляем переменную result с пустой строкой
// 2. С помощью цикла for перебираем массив array
// 3. Внутрь цикла записываем переменную result для которой присваивем шаблонную строку
// 4. В шаблонной строке прописываем счётчик плюс еденица i + 1 и элемент массива array[i]
// 5. Делаем возврат функции

const getItemsString = function (array) {
  "use strict";
  // Write code under this line
  let result = "";

  for (let i = 0; i < array.length; i += 1) {
    result += `${i + 1} - ${array[i]}\n`;
  }
  return result;
};

console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/
