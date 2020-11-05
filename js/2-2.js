// 1. Переводим строку в массив через применение методоа split для параметра message
// 2. Добавляем подсчет длинны массива через метод length
// 3. Умножаем длинну массива на значение параметра pricePerWord

const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
    
    message.split(" ").length * pricePerWord; // Write code in this line

console.log(calculateEngravingPrice("Proin sociis natoque et magnis parturient montes mus", 10)); // 80

console.log(calculateEngravingPrice("Proin sociis natoque et magnis parturient montes mus", 20)); // 160

console.log(calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)); // 240

console.log(calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)); // 120

console.log(calculateEngravingPrice("Uno", 100)); // 100
