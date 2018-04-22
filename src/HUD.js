export class HUD {
    constructor() {
        this.elements = [];
    }

    addElement(element) {
        this.elements.push(element);
    }

    removeElement(element) {
        this.elements.splice(this.elements.indexOf(element), 1);
    }

    removeElementById(id) {
        let e, i = 0;
        while (!e && i < this.elements.length)
            this.elements[i].id === id ? e = this.elements[i] : i++;
        this.elements.splice(i, 1);
    }

    render(canvasContext) {
        this.elements.forEach(e => e.render(canvasContext));
    }
}