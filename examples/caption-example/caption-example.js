import { Caption, HUD } from "./node_modules/canvas-hud/src/index.js";

export class CaptionExample {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.caption = new Caption("Test", 50, 50);
    this.hud = new HUD();

    document.body.appendChild(this.canvas);
    this.hud.addElement(this.caption);
  }

  run() {
    this.hud.render(this.canvas.getContext("2d"));
  }
}