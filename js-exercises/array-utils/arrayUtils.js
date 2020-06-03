/* eslint-disable consistent-return */
/* eslint-disable quotes */
/* eslint-disable object-curly-newline */
const forEach = (array) => (fn, thisArgs) => {
  if (typeof fn !== "function") throw new TypeError(`${fn} is not a function`);
  let index = 0;
  for (const element of array) {
    if (element) {
      if (thisArgs) fn.call(thisArgs, element, index, array);
      else fn(element, index, array);
    }
    index += 1;
  }
};

const map = (array) => (fn, thisArgs) => {
  if (typeof fn !== "function") throw new TypeError(`${fn} is not a function`);
  let index = 0;
  const mappedArray = [];
  for (const element of array) {
    // if (element) {
    if (thisArgs) mappedArray.push(fn.call(thisArgs, element, index, array));
    else mappedArray.push(fn(element, index, array));
    // }
    index += 1;
  }
  return mappedArray;
};

const filter = (array) => (fn, thisArgs) => {
  if (typeof fn !== "function") throw new TypeError(`${fn} is not a function`);
  let index = 0;
  const filteredArray = [];
  for (const element of array) {
    // if (element) {
    if (thisArgs) {
      if (fn.call(thisArgs, element, index, array)) filteredArray.push(element);
    } else if (fn(element, index, array)) filteredArray.push(element);
    // }
    index += 1;
  }
  return filteredArray;
};

const reduce = (array) => (fn, initialValue) => {
  if (typeof fn !== "function") throw new TypeError(`${fn} is not a function`);
  let accumulator = initialValue === undefined ? 0 : initialValue;
  for (let i = 0; i < array.length; i += 1) {
    accumulator = fn(accumulator, array[i], i, array);
  }
  return accumulator;
};

export { forEach, map, filter, reduce };
