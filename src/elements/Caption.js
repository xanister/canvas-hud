export class Caption {
  static render(canvasContext, message, x, y, opts = {}) {
    if (opts.fillColor) canvasContext.fillColor = opts.fillColor;
    if (opts.font) canvasContext.font = opts.font;

    canvasContext.fillText(message, x, y);
  }

  constructor(message = "", x = 0, y = 0, opts = {}, id = Caption.idCounter++) {
    this._message = message;
    this.x = x;
    this.y = y;
    this.opts = Object.assign({}, Caption.DEFAULT_CAPTION_OPTIONS, opts);
    this.id = id;
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

Caption.DEFAULT_CAPTION_OPTIONS = {
  fillColor: "black",
  font: "16px Arial"
}

Caption.idCounter = 0;