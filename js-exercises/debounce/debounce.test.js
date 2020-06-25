import { debounce } from './debounce';

describe('debounce', () => {
  jest.useFakeTimers();
  test('check how many times a function is called', () => {
    const func = jest.fn();
    const debouncedFn = debounce(func, 5000);
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();

    expect(func).not.toBeCalled();
    jest.runAllTimers();
    expect(func).toBeCalled();
    expect(func).toHaveBeenCalledTimes(1);
  });
});
