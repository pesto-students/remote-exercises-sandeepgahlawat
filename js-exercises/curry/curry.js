const curry = (fn) => {
  const curryInner = (fnArity, innerFn) => (...args) => {
    if (args.length >= fnArity) return innerFn(...args);
    return curryInner(fnArity - args.length, (...innerArgs) => innerFn(...args, ...innerArgs));
  };

  return curryInner(fn.length, fn);
};

export { curry };
