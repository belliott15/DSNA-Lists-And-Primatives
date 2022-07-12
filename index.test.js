const { reverseWords, titleCase, oddishOrEvenish } = require('.');

describe('reverseWords', () => {
  it('should reverse the words of a sentence', () => {
    expect(reverseWords('alchemy rocks gold')).toBe('ymehcla skcor dlog');
  });
});

describe('titleCase', () => {
  it('should change each word to be first letter capitalized and rest lowercase', () => {
    expect(titleCase('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
  });
});

describe('oddishOrEvenish', () => {
  it('should determine if a sum of digits is oddish or evenish', () => {
    expect(oddishOrEvenish('121')).toBe('Evenish');
    expect(oddishOrEvenish('41')).toBe('Oddish');
  });
});

describe('atFunction', () => {
  it('should return a specific element from the array given its index', () => {
    expect(at(['a', 'b', 'c', 'd', 'e'], 2)).toBe('c');
    expect(at(['a', 'b', 'c', 'd', 'e'], -2)).toBe('d');
  });
});