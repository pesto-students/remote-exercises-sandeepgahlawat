/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
// your implementation

function map(inputObj, fn) {
  return Object.fromEntries(
    Object.entries(inputObj).map(([key, val], index) => fn(key, val, index))
  );
}

function filter(inputObj, fn) {
  return Object.fromEntries(
    Object.entries(inputObj).filter(([key, val], index) => fn(key, val, index))
  );
}

function invert(inputObj) {
  return Object.fromEntries(
    Object.entries(inputObj).map(([key, val]) => [val, key])
  );
}

function merge(...args) {
  return [...args].reduce(
    (result, current) => Object.assign(result, current),
    {}
  );
}

function all(inputObj, fn) {
  return Object.entries(inputObj)
    .map(([key, val], index) => fn(key, val, index))
    .every((curretnVal) => curretnVal);
}

function some(inputObj, fn) {
  return Object.entries(inputObj)
    .map(([key, val], index) => fn(key, val, index))
    .some((curretnVal) => curretnVal);
}

export { map, filter, invert, merge, all, some };
