// 1. const numbers это переменная, в которую записан новый, пустой массив new Array длинной массива из получаемых аргументов
// 2. По условию задачи нам нужно передать аргументы в numbers и умножить каждый аргумент на 10
// 2. Берём элемент пустого массива numbers[i] и присваиваем ему элемент нового массива с умножением на 10
// 3. Функция уже за нас сама возвращает numbers

function mapArray(array) {
  'use strict';
  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    numbers[i] = array[i] * 10;
  }
  return numbers;
}

console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]
