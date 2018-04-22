// caption-example.js
import { Caption, HUD } from "./node_modules/canvas-hud/src/index.js";

export class CaptionExample {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.caption = new Caption("Test");
    this.hud = new HUD();

    document.body.appendChild(this.canvas);
    this.hud.addElement(this.caption);
  }

  render() {
    this.hud.render(this.canvas.getContext("2d"));
  }
}