const debounce = (fn, timeInMs) => {
  let timeout;
  return function debounced(...args) {
    const handler = () => {
      timeout = null;
      fn(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(handler, timeInMs);
  };
};

export { debounce };
