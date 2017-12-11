export interface CaptionOptions {
    context?: any;
    message: (context?: any) => string;
    x: number;
    y: number;
}
export declare class Caption {
    message: (context: any) => string;
    context: any;
    x: number;
    y: number;
    static render(context: CanvasRenderingContext2D, text: string, x: number, y: number, font?: string): void;
    constructor(options: CaptionOptions);
    render(context: CanvasRenderingContext2D): void;
}
