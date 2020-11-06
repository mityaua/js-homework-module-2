// 1. const numbers это новый, пустой массив, в который нам нужно передать аргументы при вызове функции
// 2. Берём элемент нового массива numbers[i] и присваиваем ему элемент старого массива с умножением на 10

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
