const limitFunctionCallCount = (callback, callLimit) => {
  const cache = { funcCalled: 0 };
  return (...args) => {
    if (cache.funcCalled < callLimit) {
      cache.funcCalled += 1;
      return callback(...args);
    }
    return null;
  };
};

export { limitFunctionCallCount };
