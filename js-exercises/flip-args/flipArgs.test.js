import { flipArgs } from './flipArgs';

describe('flipArgsFunction', () => {
  it('should return a function', () => {
    expect(typeof flipArgs()).toBe('function');
  });
  it('The cached function should return the correct result', () => {
    const flipped = flipArgs((...args) => {
      return [...args];
    });
    expect(flipped(1, 2, 3)).toStrictEqual([3, 2, 1]);
  });
  it('The cached function should return the correct result', () => {
    const flipped = flipArgs((...args) => {
      return [...args];
    });
    expect(flipped('a', 'b', 'c')).toStrictEqual(['c', 'b', 'a']);
  });
});
