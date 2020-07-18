class Handler {

    init(status, render, game) {
        this.status = status;
        this.render = render;
        this.game = game;
    }

    initEventHandlers() {
        // Ставим обработчик, при клике на таблицу вызовется функция this.cellClickHandler.
        this.render.gameTableElement.addEventListener('click', event => this.cellClickHandler(event));
    }

    /**
     * Обработчик события клика.
     * @param {MouseEvent} event
     */
    cellClickHandler(event) {
        // Если клик не нужно обрабатывать, уходим из функции.
        if (!this.isCorrectClick(event)) {
            return;
        }

        // Заполняем ячейку.
        this.render.fillCell(event);
        // Если кто-то выиграл, заходим в if.
        if (this.game.hasWon()) {
            // Ставим статус в "остановлено".
            this.status.setStatusStopped();
            // Сообщаем о победе пользователя.
            this.game.sayWonPhrase();
        }

        // Меняем фигуру (крестик или нолик).
        this.render.togglePhase();
    }

    /**
     * Проверка был ли корректный клик, что описан в событии event.
     * @param {Event} event
     * @returns {boolean} Вернет true в случае если статус игры "играем", клик что описан в объекте event был
     * по ячейке и ячейка куда был произведен клик был по пустой ячейке.
     */
    isCorrectClick(event) {
        return this.status.isStatusPlaying() && this.isClickByCell(event) && this.render.isCellEmpty(event);
    }

        /**
     * Проверка что клик был по ячейке.
     * @param {Event} event
     * @param {HTMLElement} event.target
     * @returns {boolean} Вернет true, если клик был по ячейке, иначе false.
     */
    isClickByCell(event) {
        return event.target.tagName === 'TD';
    }
}
