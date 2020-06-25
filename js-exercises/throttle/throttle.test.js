import { throttle } from './throttle';

describe('throttle', () => {
  test('check if throttled ', (done) => {
    const func = jest.fn((val) => {
      expect(func).toHaveBeenCalledTimes(1);
      expect(val).toBe('Hello World');
      done();
    });
    const throttledFn = throttle(func, 5000);
    throttledFn('Hello World');
    throttledFn('My World');
    throttledFn('Your World');
  });
});
