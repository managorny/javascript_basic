'use strict';

/*
3. Объявить две переменные a и b и задать им
целочисленные произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
Подсказка, чтобы сделать последний пункт можно также
попробовать погуглить по запросу «получить знак числа javascript»
*/

// let a = 1;
let a = Number(prompt("Введите первое число"));
// let b = 2;
let b = Number(prompt("Введите второе число"));

if (a >= 0 && b >= 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else {        // или через Math.sign()
    alert(a + b);
}
