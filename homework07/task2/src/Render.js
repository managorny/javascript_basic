class Render {
    constructor() {
        this.gameTableElement = document.getElementById('game');
        this.mapValues = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
    }
    /**
     * Инициализация игры.
     */
    init(settings, phase) {
        this.settings = settings;
        this.phase = phase;
    }
    
    /**
     * Вывод ячеек в html.
     */
    renderMap() {
        for (let row = 0; row < this.settings.rowsCount; row++) {
            const tr = document.createElement('tr');
            this.gameTableElement.appendChild(tr);
            
            for (let col = 0; col < this.settings.colsCount; col++) {
                let td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    }

    fillCell(event) {
        // Получаем строку и колонку куда кликнули.
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        // Заполняем ячейку и ставим значение в массиве, в свойстве mapValues.
        this.mapValues[row][col] = this.phase.phase;
        event.target.textContent = this.phase.phase;
    }

    /**
     * Проверка что в ячейку не ставили значение (крестик или нолик).
     * @param {Event} event
     * @param {HTMLElement} event.target
     * @returns {boolean} Вернет true, если ячейка пуста, иначе false.
     */
    isCellEmpty(event) {
        // Получаем строку и колонку куда кликнули.
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        return this.mapValues[row][col] === '';
    }

    /**
     * Меняет фигуру (крестик или нолик).
     */
    togglePhase() {
        this.phase.phase = this.phase.phase === 'X' ? '0' : 'X';
    }
}
