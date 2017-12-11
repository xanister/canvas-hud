module.exports = class Caption {
    static render(canvasContext, text, x, y, opts = {}) {
        if (opts.color) canvasContext.fillColor = opts.color;
        if (opts.font) canvasContext.font = opts.font;

        canvasContext.fillText(text, x, y);
    }

    constructor(message, x, y, opts = {}) {
        this._message = message;
        
        this.decay = 0;
        this.x = x;
        this.y = y;
        this.opts = Object.assign({}, opts);
    }

    get message() {
        return typeof this._message === "function" ? 
            this._message(this.opts.messageContext) : this._message;
    }

    set message(text) { this._message = test; }

    render(canvasContext) {
        if (this.opts.decay) this.decay += this.opts.decay

        Caption.render(
            canvasContext, 
            this.message,
            this.x, 
            this.y, 
            this.opts
        );
    }
}