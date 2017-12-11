module.exports = class Caption {
    static render(canvasContext, text, x, y, font = "30px Arial") {
        canvasContext.font = font;
        canvasContext.fillText(text, x, y);
    }

    constructor(options = {}) {
        this.options = options;
    }

    get message() {
        return typeof this.options.message === "function" ?
            this.options.message(this.options.messageContext) :
            this.options.message;
    }

    get x() { return this.options.x; }
    get y() { return this.options.y; }

    render(canvasContext) {
        Caption.render(canvasContext, this.message, this.x, this.y);
    }
}