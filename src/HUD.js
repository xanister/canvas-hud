module.exports = class HUD {
    constructor() {
        this.elements = [];
    }

    render(canvasContext) {
        this.elements.forEach(e => e.render(canvasContext));
    }
}