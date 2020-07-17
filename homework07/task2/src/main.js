window.addEventListener('load', () => {
    const settings = new Settings();
    const status = new Status();
    const render = new Render();
    const phase = new Phase();
    const handler = new Handler();
    const game = new Game();
    
    settings.init({ rowsCount: 3, colsCount: 3 });
    render.init(settings, phase);
    game.init(render, phase);
    handler.init(status, render, game);

    render.renderMap();
    handler.initEventHandlers();
    status.isStatusPlaying();
});
