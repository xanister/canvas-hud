module.exports = class HUD {
    constructor() {
        this.elements = [];
    }

    addCaption(c) {
        this.elements.push(c);
    }

    removeCaption(c) {
        this.elements.splice(this.elements.indexOf(c), 1);
    }

    render(canvasContext) {
        this.elements.forEach(e => e.render(canvasContext));
    }
}