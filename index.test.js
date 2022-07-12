const { reverseWords, titleCase, oddishOrEvenish, at, fizzBuzz } = require('.');

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
    expect(at(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], -6)).toBe('d');
  });
});

describe('fizzBuzz', () => {
  it('should return multiples of 3 as Fizz and multiples of 5 as Buzz and both multiples as FizzBuzz', () => {
    expect(fizzBuzz('16')).toBe([
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
      16,
    ]);
  });
});
