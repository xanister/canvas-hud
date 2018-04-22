```
// Create the HUD
let hud = new HUD();

// Add a caption
hud.addElement(new Caption("Some Text!!!, 0, 100));

// Render on the canvas (meant to be done in render loop)
let canvas = document.getElementById("canvas"); // Some canvas
hud.render(canvas.getContext("2d"));
```