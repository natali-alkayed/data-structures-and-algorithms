const validateBrackets = require('../stackQueueBrackets'); 

describe('validateBrackets', () => {
  it('should return true for balanced brackets', () => {
    expect(validateBrackets('()')).toBe(true);
    expect(validateBrackets('[]')).toBe(true);
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('()[]{}')).toBe(true);
    expect(validateBrackets('[({})]')).toBe(true);
    expect(validateBrackets('({[]})')).toBe(true);
  });

  it('should return false for unbalanced brackets', () => {
    expect(validateBrackets('(')).toBe(false);
    expect(validateBrackets(')')).toBe(false);
    expect(validateBrackets('[}')).toBe(false);
    expect(validateBrackets('({[)}]')).toBe(false);
    expect(validateBrackets('([)]')).toBe(false);
    expect(validateBrackets(']')).toBe(false);
    expect(validateBrackets('}')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(validateBrackets('')).toBe(true);
  });
});
