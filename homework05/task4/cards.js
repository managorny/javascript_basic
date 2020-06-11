'use strict';

const buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        clickTarget(event)
    })
});

function clickTarget(event) {
    const productCard = event.target.parentNode;

    const card = {
        modal: productCard,
        img: productCard.querySelector('img'),
        productName: productCard.querySelector('.productName'),
        button: productCard.querySelector('button'),
    };
    
    const textOnButton = card.button.innerText;

    if (textOnButton === 'Подробнее') {
        showMoreText(card);
    } else if (textOnButton === 'Отмена') {
        hideMoreText(card);
    }
}

function hideMoreText(card) {
    card.img.style.display = 'inline-block';
    card.modal.querySelector('.text').remove();
    card.button.innerText = 'Подробнее';
}

function showMoreText(card) {
    card.img.style.display = 'none';
    const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
    card.productName.insertAdjacentHTML('afterend', `<div class="text">${text}</div>`);
    card.button.innerText = 'Отмена';
}
