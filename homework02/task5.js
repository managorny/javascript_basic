'use strict';

/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции (использовать switch)
выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

function mathOperation (arg1, arg2, operation) {
    switch(operation) {
        case "+":
            return arg1 + arg2;
        case "-":
            return arg1 - arg2;
        case "/":
            return arg1 / arg2;
        case "*":
            return arg1 * arg2;
        default:
            return "Введена неверная операция";
    }
}

let num1 = Number(prompt("Введите первое число"));
let num2 = Number(prompt("Введите второе число"));
let operation = (prompt("Введите операцию"));
alert(mathOperation(num1, num2, operation));
