// export type CaptionMessage = string;
// export type CaptionMessageResolver = () => string;

export interface CaptionOptions {
    // message: CaptionMessage | CaptionMessageResolver;
    context?: any;
    message: (context?: any) => string;
    x: number;
    y: number;
}

export class Caption {
    message: (context: any) => string;
    context: any;
    x: number;
    y: number;

    static render(context: CanvasRenderingContext2D, text: string, x: number, y: number, font: string = "30px Arial") {
        context.font = font;
        context.fillText(text, x, y);
    }

    constructor(options: CaptionOptions) {
        this.message = options.message;
        this.context = options.context || this;
        this.x = options.x;
        this.y = options.y;
    }

    render(context: CanvasRenderingContext2D) {
        Caption.render(context, this.message(this.context), this.x, this.y);
    }
}