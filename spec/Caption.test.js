const Caption = require("../src/Caption");

describe("correctly sets message", () => {
    test("to configured string", () => {
        let c = new Caption("foo")

        expect(c.message).toBe("foo");
    });

    test("to result of configured function with correct context", () => {
        let c = new Caption(ctx => `foo - ${ctx}`, 0, 0, { messageContext: "bar" });

        expect(c.message).toBe("foo - bar");
    });
});