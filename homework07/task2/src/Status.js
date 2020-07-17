class Status {
    constructor() {
        this.setStatusPlaying();
    }

    setStatusPlaying() {
        this.status = 'playing';
    }

    isStatusPlaying() {
        return this.status === 'playing';
    }

    setStatusStopped() {
        this.status = 'stopped';
    }
}
