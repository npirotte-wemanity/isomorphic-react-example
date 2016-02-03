export default class BaseStore {
    constructor() {
        this.listeners = [];
    }

    addListener(listener: () => void): void {
        this.listeners.push(listener);
    }

    removeListener(listener: () => void): void {
        var index: number = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    }

    emitChange(): void {
        for (var i: number = 0; i < this.listeners.length; i++) {
            this.listeners[i]();
        }
    }
}
