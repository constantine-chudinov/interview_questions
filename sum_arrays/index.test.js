const checkArrayForSum = require("./index");

test("Empty list", () => {
    expect(checkArrayForSum([], 7)).toBe(false);
});

test("Sum of first and last number", () => {
    expect(checkArrayForSum([2, 7, 5], 7)).toBe(true);
});

test("Sum of second and last number", () => {
    expect(checkArrayForSum([2, 7, 5], 12)).toBe(true);
});

test("returns false when there are no numbers = sum", () => {
    expect(checkArrayForSum([2, 7, 5], 13)).toBe(false);
});

test("With negative numbers but sum is positive", () => {
    expect(checkArrayForSum([100, -33, 110, 44], 11)).toBe(true);
});


test("Should not sum each element twice", () => {
    expect(checkArrayForSum([4, 7, 1, 3], 14)).toBe(false);
});

test("With negative numbers but sum is negative", () => {
    expect(checkArrayForSum([100, -33, 110, 22], -11)).toBe(true);
});