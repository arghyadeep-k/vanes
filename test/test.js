const vanes = require('../index');

test('Single parameter', () => {
    expect(vanes("Hello, {var}!", {var: 'World'})).toBe("Hello, World!");
});

test('Multiple parameters', () => {
    expect(vanes("{var1}, {var2}!", {var1: "Hello", var2: 'World'})).toBe("Hello, World!");
});

test('Empty varList removes placeholders', () => {
    expect(vanes("Hello, {var}!", {})).toBe("Hello, !");
});

test('Missing key in varList returns empty string', () => {
    expect(vanes("Hello, {missing}!", {other: 'value'})).toBe("Hello, !");
});

test('Non-string input returns empty string', () => {
    expect(vanes(123, {var: 'World'})).toBe("");
    expect(vanes(null, {var: 'World'})).toBe("");
    expect(vanes(undefined, {var: 'World'})).toBe("");
});

test('Invalid varList returns original string', () => {
    expect(vanes("Hello, {var}!", "invalid")).toBe("Hello, {var}!");
    expect(vanes("Hello, {var}!", 123)).toBe("Hello, {var}!");
});

test('Duplicate placeholders', () => {
    expect(vanes("{var} said {var}", {var: 'Hello'})).toBe("Hello said Hello");
});

test('Special characters in values', () => {
    expect(vanes("Hello, {var}!", {var: 'World\nTest'})).toBe("Hello, World\nTest!");
});
