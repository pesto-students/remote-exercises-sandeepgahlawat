import { longestWordInString } from './longestWordInString';

describe('longestWordInString', () => {
  // write your own test cases
  test('should get the correct number representing the word with max lenght in a string', () => {
    expect(longestWordInString('I love doing JS excercises')).toBe('excercises');
    expect(longestWordInString('I hate staring into my computer screen all day')).toBe('computer');
    expect(longestWordInString('I want to be the best programmer in the world')).toBe('programmer');
  });
});
