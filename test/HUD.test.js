const Caption = require("../src/Caption");
const HUD = require("../src/HUD");

describe("HUD", () => {
    let hud;

    beforeEach(() => {
        hud = new HUD();
    });

    describe(".addElement", () => {
        it("adds element", () => {
            let c = new Caption("foo");

            hud.addElement(c);

            expect(hud.elements.find(e => e === c)).toBe(c);
        });
    });

    describe(".removeElement", () => {
        it("removes element", () => {
            let c = new Caption("foo");

            hud.addElement(c);

            expect(hud.elements.find(e => e === c)).toBe(c);

            hud.removeElement(c);

            expect(hud.elements.find(e => e === c)).toBe(undefined);
        });
    });

    describe(".removeElementById", () => {
        it("removes element", () => {
            let c = new Caption("foo");

            hud.addElement(c);

            expect(hud.elements.find(e => e === c)).toBe(c);

            hud.removeElementById("foo");

            expect(hud.elements.find(e => e === c)).toBe(undefined);
        });
    });
});