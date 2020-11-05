// 1. Создали переменную words. В ней перевели получаемую строку string в массив
// 2. Создали переменную для самого длинного слова longestWord (с пустой строкой)
// 3. Используя цикл for of мы перебираем массив с условием if
// 4. Условие - если длинна слова в массиве больше чем длинна переменной longestWord, тогда присваиваем найденное слово в longestWord
// 5. Возвращаем через функцию переменную с самым длинным словом, то есть longestWord

function findLongestWord(string = '') {
  // Write code under this line
  const words = string.split(' ');
  let longestWord = '';

  for (let word of words) {
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
