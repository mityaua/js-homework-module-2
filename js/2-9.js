// 1. Пишем условие для функции проверки длинны логина через оператор &&, которая отдает в переменную validLogin результат
// 2. Делаем возврат функции с помощью переменной

// 3. Пишем условие для функции проверки уникальности, которая проверяет в массиве allLogins уникальность элемента login
// 4. Делаем возврат функции с помощью переменной но со значением false

// 5. Используя конструкцию if else if else, функции уникальности и длинны логиа, прописываем условия для вывода сообщений и добавления элемента в массив

function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  const validLogin = login.length >= min && login.length <= max;

  return validLogin;
}

function isLoginUnique(allLogins, login) {
  'use strict';
  // Write code under this line
  const loginUnique = allLogins.includes(login);

  return !loginUnique;
}

function addLogin(allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;

  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    allLogins.push(login);
    message = SUCCESS;
  } else if (isLoginUnique(allLogins, login)) {
    message = ERROR;
  } else {
    message = REFUSAL;
  }

  return message;
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
