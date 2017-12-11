
const Caption = require("../src/Caption");

test('correctly sets message with context', () => {
    let c = new Caption({ message: ctx => `foo - ${ctx}`, messageContext: "bar" });

    expect(c.message).toBe("foo - bar");
});