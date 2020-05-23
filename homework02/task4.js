'use strict';

/*
4. Реализовать основные 4 арифметические операции (+, -, /, *)
 в виде функций с двумя параметрами. 
 Т.е. например, функция для сложения должна принимать два числа, 
 складывать их и возвращать результат.
Обязательно использовать оператор return.
*/

function arith(d, c) {
    let sum = d + c;
    let sub = d - c;
    let div = d / c;
    let mul = d * c;
    return `Сумма: ${sum}\nРазность: ${sub}\nЧастное: ${div}\nПроизведение: ${mul}`
}

let d = Number(prompt("Введите первое число"));
let c = Number(prompt("Введите второе число"));
alert(arith(d, c));


// или каждая функция по отдельности

function sum(d, c) {
    return d + c;
}

function sub(d, c) {
    return d - c;
}

function div(d, c) {
    return d / c;
}

function mul(d, c) {
    return d * c;
}

let f = Number(prompt("Введите первое число"));
let q = Number(prompt("Введите второе число"));

alert(`Сумма: ${sum(f, q)}`);
alert(`Разность: ${sub(f, q)}`);
alert(`Частное: ${div(f, q)}`);
alert(`Произведение: ${mul(f, q)}`);
