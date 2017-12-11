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

    constructor(options: CaptionOptions) {
        this.message = options.message;
        this.context = options.context || this;
        this.x = options.x;
        this.y = options.y;
    }

    render(context: CanvasRenderingContext2D) {
        context.font = "30px Arial";
        context.fillText(this.message(this.context), this.x, this.y);
    }
}