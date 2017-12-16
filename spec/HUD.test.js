const Caption = require("../src/Caption");
const HUD = require("../src/HUD");

describe("HUD", () => {
    let hud;

    beforeEach(() => {
        hud = new HUD();
    });

    describe(".addCaption", () => {
        it("adds caption", () => {
            let c = new Caption("foo");

            hud.addCaption(c);

            expect(hud.elements.find(e => e === c)).toBe(c);
        });
    });
});