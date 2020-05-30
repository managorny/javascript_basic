'use strict';

/*
Написать функцию, преобразующую число в объект. 
Передавая на вход число в диапазоне [0, 999], 
мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, 
не целое число или вообще не число, 
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function numToObject(num) {
    if (Number.isInteger(num) && num > 0 && num < 999) {
        let units = num % 10;
        let tens = Math.floor(num / 10) % 10;
        let hundereds = Math.floor(num / 100) % 10;

        function numObject(units, tens, hundereds) {
            this.units = units;
            this.tens = tens;
            this.hundereds = hundereds;
        }
        const resObject = new numObject(units, tens, hundereds);
        console.log(resObject);
    } else {
        const resObject = {};
        console.log(resObject);
        console.log("Это не число или не верный диапазон");
    }
}

numToObject(Number(prompt("Введите число")));
