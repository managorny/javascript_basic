class Settings {
    init(params) {
        let defaultParams = {rowsCount: 3, colsCount: 3};
        Object.assign(defaultParams, params);

        if (defaultParams.rowsCount < 3 || defaultParams.rowsCount > 10) {
            throw new Error('Неверные настройки, значение rowsCount должно быть в диапазоне [3, 10].');
        }
        this.rowsCount = defaultParams.rowsCount;

        if (defaultParams.colsCount < 3 || defaultParams.colsCount > 10) {
            throw new Error('Неверные настройки, значение rowsCount должно быть в диапазоне [3, 10].');
        }
        this.colsCount = defaultParams.colsCount;
    }
}
