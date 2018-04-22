import { expect } from "chai";
import { Caption, HUD } from "../src/index";

describe("HUD", () => {
  let hud;

  beforeEach(() => {
    hud = new HUD();
  });

  describe(".addElement", () => {
    it("adds element", () => {
      let c = new Caption("foo");

      hud.addElement(c);

      expect(hud.elements.find(e => e === c)).to.equal(c);
    });
  });

  describe(".removeElement", () => {
    it("removes element", () => {
      let c = new Caption("foo");

      hud.addElement(c);

      expect(hud.elements.find(e => e === c)).to.equal(c);

      hud.removeElement(c);

      expect(hud.elements.find(e => e === c)).to.equal(undefined);
    });
  });

  describe(".removeElementById", () => {
    it("removes element", () => {
      let c = new Caption("foo");

      hud.addElement(c);

      expect(hud.elements.find(e => e === c)).to.equal(c);

      hud.removeElementById("foo");

      expect(hud.elements.find(e => e === c)).to.equal(undefined);
    });
  });
});