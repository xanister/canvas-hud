const DEFAULT_CAPTION_OPTIONS = {
    fillColor: "black",
    font: "30px Arial"
}

module.exports = class Caption {
    static render(canvasContext, text, x, y, opts = {}) {
        if (opts.fillColor) canvasContext.fillColor = opts.fillColor;
        if (opts.font) canvasContext.font = opts.font;

        canvasContext.fillText(text, x, y);
    }

    constructor(message, x, y, opts = {}) {
        this._message = message;
        
        this.x = x;
        this.y = y;
        this.opts = Object.assign({}, DEFAULT_CAPTION_OPTIONS, opts);
    }

    get message() {
        return typeof this._message === "function" ? 
            this._message(this.opts.messageContext) : this._message;
    }

    set message(text) { this._message = text; }

    render(canvasContext) {
        Caption.render(
            canvasContext, 
            this.message,
            this.x, 
            this.y, 
            this.opts
        );
    }
}