const { reverseWords } = require(".");

describe("reverseWords", () => {
  it("should reverse the words of a sentence", () => {
    expect(reverseWords("alchemy rocks gold")).toBe("ymehcla skcor dlog");
  });
});

describe("titleCase", () => {
  it("should change each word to be first letter capitalized and rest lowercase", () => {
    expect(reverseWords("alchemy ROCKS goLD")).toBe("Alchemy Rocks Gold");
  });
});