'use strict';


const buttonBasket = document.querySelector('.button-basket');
const basket = document.querySelector('.basket');
const buy = document.querySelectorAll('.button-buy');
const products = document.querySelector('.products');
let result = 0;

// открываем-закрываем корзину
let i = 0;
buttonBasket.addEventListener('click', function() {
    if (i % 2 == 0) {
        basket.classList.remove('hidden');
    } else {
        basket.classList.add('hidden');
    }
    i++;
});

// Готовим корзину к списку товаров
basket.insertAdjacentHTML('beforeend',`<ul class="products-basket"></ul>`);
basket.insertAdjacentHTML('beforeend',`<div class="basket-result">Итого: ${result} р.</div>`);
const productsBasket = basket.querySelector('.products-basket');

// Функция добавления товара в корзину, принимает на вход id кнопки, на которой был вызов
function addProductToBasket(idx) {

    // получаем id товара
    let id = products.children[idx].id;

    // объявляем переменные, которые будеи дальше использовать
    let productTitle = '';
    let productPrice = 0;
    let productCount = 0;

    // получаем массив элементов товара, чтобы перебрать каждый и получить цену с названием
    const arrProductsChildren = Array.prototype.slice.call(products.children[idx].children);

    // ищем название товара и цену
    arrProductsChildren.forEach(function(childEl) {
        if (childEl.classList == "product-title") {
            productTitle = childEl.innerText;
        }
        if (childEl.classList == "product-price") {
            productPrice = childEl.innerText.match(/\d+/g);
        }
    });

    // собираем дочерние объекты корзины в массив
    let basketChildren = Array.from(productsBasket.children);

    // добавляем в корзину товар, если его еще нет, а если есть, добавляем его кол-во и считаем общую стоимость
    let count = 0;
    basketChildren.forEach(function(basketEl) {
        let basketChildrenChildren = Array.from(basketEl.children); //проваливаемся в элемент (li) списка товаров, ищем id товара (в span)
        let NowCount = basketChildrenChildren.find(value => value.className == "count"); // находим кол-во товара текущее
        let totalPrice = basketChildrenChildren.find(value => value.className == "total-price"); // находим текущую сумму цен
        let basketResult = basket.querySelector('.basket-result');
        basketChildrenChildren.forEach(function(basketChildrenEl) {
            while (basketChildrenEl.id == id) {
                count++; // считаем, чтобы понять, что товар уже есть в корзице
                // вычисляем стоимость за единицу
                totalPrice.innerHTML = Number(totalPrice.innerHTML.match(/\d+/g)) / Number(NowCount.innerHTML);
                // увеличиваем на 1 кол-во товара
                NowCount.innerHTML = Number(NowCount.innerHTML) + 1;
                break;
            }
        });

        // меняем общую сумму в зависимости от кол-ва товаров у текущего товара
        basketChildrenChildren.forEach(function(basketChildrenEl) {
            if (basketChildrenEl.id == id && Number(NowCount.innerHTML) > 1) {
                basketResult.innerHTML = ` Итого: ${Number(basketResult.innerHTML.match(/\d+/g)) + Number(totalPrice.innerHTML.match(/\d+/g))} р.`;
                totalPrice.innerHTML = `${Number(totalPrice.innerHTML.match(/\d+/g)) * Number(NowCount.innerHTML)} р.`;
            }
        });
    });

    // если товара еще нет в корзине, то добавляем его
    if (count == 0) {
        productsBasket.insertAdjacentHTML('beforeend',
                                        `<li class="product-list">
                                            <span class="name" id="${id}">"${productTitle}"</span>
                                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                            <span class="count">${productCount+1}</span>
                                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                            <span class="total-price">${productPrice} p.</span>
                                        </li>`);
        let basketChildren = Array.from(productsBasket.children); //идет дублирование. TODO: убрать дублирование
        basketChildren.forEach(function(basketEl) {
            let basketChildrenChildren = Array.from(basketEl.children); //проваливаемся в элемент (li) списка товаров, ищем id товара (в span)
            let totalPrice = basketChildrenChildren.find(value => value.className == "total-price"); // находим текущую сумму цен
            let basketResult = basket.querySelector('.basket-result');
            basketChildrenChildren.forEach(function(basketChildrenEl) {
                if (basketChildrenEl.id == id) {
                    basketResult.innerHTML = ` Итого: ${Number(basketResult.innerHTML.match(/\d+/g)) + Number(totalPrice.innerHTML.match(/\d+/g))} р.`;
                }
            });
        });
    }
};

// Переведем все кнопки покупки в массив
let arrButtonBuy = Array.prototype.slice.call(buy); //Array.from
// Слушаем каждую кнопку на клик и определяем ее индекс, чтобы по нему найти товар в массиве товаров
arrButtonBuy.forEach(function(el) {
    let idx = arrButtonBuy.indexOf(el);
    el.addEventListener('click', addProductToBasket.bind(this, idx));
});

// если в корзине уже есть товар с этим id то увеличивай count и умножай цену на count