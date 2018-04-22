import { expect } from "chai";
import { Caption, HUD } from "../src/index";

describe("Caption", () => {
  it("gets and sets message", () => {
    let c = new Caption("foo", "test message")

    expect(c.message).to.equal("test message");
  });
});