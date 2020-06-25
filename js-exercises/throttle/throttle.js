const throttle = (fn, timeInMs) => {
  let timeout = null;
  return function throttled(...args) {
    const handler = () => {
      timeout = null;
      fn(...args);
    };

    if (timeout === null) {
      timeout = setTimeout(handler, timeInMs);
    }
  };
};

export { throttle };
