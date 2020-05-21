function cacheFunction(callback) {
  const cache = {};
  return (input) => {
    if (input in cache) {
      return cache[input];
    }
    const result = callback(input);
    cache[input] = result;
    return result;
  };
}

export { cacheFunction };
