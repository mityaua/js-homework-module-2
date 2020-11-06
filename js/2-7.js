// 1. По условию задачи используем готовый цикл в котором указываем условие
// 2. Если элемент массива, после проверки его методом Number.isFinite, возвращает нам true, тогда добавляем этот элемент в новый массив
// 3. https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite

function filterArray(array) {
  'use strict';
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    if (Number.isFinite(array[i])) {
      numbers.push(array[i]);
    }
  }
  return numbers;
}

console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

console.log(filterArray([1, NaN, Infinity]));
// [1]

console.log(filterArray([0, -0, 100, '100']));
// [0, 0, 100]

console.log(filterArray([undefined, false, null, [], 1]));
// [1]

console.log(filterArray([{}, () => {}, 2]));
// [2]
