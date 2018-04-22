const Caption = require("../src/Caption");

describe("Caption", () => {
    describe("gets and sets message", () => {
        test("to configured string", () => {
            let c = new Caption("foo", "test message")

            expect(c.message).toBe("test message");
        });

        test("to result of configured function with correct context", () => {
            let c = new Caption("foo", ctx => `test message - ${ctx}`, 0, 0, { messageContext: "bar" });

            expect(c.message).toBe("test message - bar");
        });
    });
});