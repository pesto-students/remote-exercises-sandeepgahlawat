/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
// your implementation

const spreadAndApply = (fn) => (args) => fn(...args);

function getAllKeyValuePairs(inputObj) {
  return [
    ...Object.getOwnPropertyNames(inputObj),
    ...Object.getOwnPropertySymbols(inputObj),
  ].map((key) => [key, inputObj[key]]);
}

function convertKeyValuePairsToObject(keyValuePairsArray, inputObj, isInvert) {
  const resultObject = {};
  keyValuePairsArray.forEach((el) => {
    const [key, value] = el;
    const descriptor = Object.getOwnPropertyDescriptor(
      inputObj,
      isInvert ? value : key
    );
    if (descriptor.enumerable) {
      resultObject[key] = value;
    } else {
      Object.defineProperty(resultObject, key, {
        value,
      });
    }
  });
  return resultObject;
}

function map(inputObj, fn) {
  const transformedKeyValuePairs = getAllKeyValuePairs(
    inputObj
  ).map(([key, val], index) => fn(key, val, index));

  return convertKeyValuePairsToObject(transformedKeyValuePairs, inputObj);
}

function filter(inputObj, fn) {
  const transformedKeyValuePairs = getAllKeyValuePairs(
    inputObj
  ).filter(([key, val], index) => fn(key, val, index));
  return convertKeyValuePairsToObject(transformedKeyValuePairs, inputObj);
}

function invert(inputObj) {
  const transformedKeyValuePairs = getAllKeyValuePairs(
    inputObj
  ).map(([key, val]) => [val, key]);
  return convertKeyValuePairsToObject(transformedKeyValuePairs, inputObj, true);
}

function merge(...args) {
  const mergedObject = {};
  [...args].forEach((obj) => {
    getAllKeyValuePairs(obj).forEach((keyValuePair) => {
      const [key, value] = keyValuePair;
      const descriptor = Object.getOwnPropertyDescriptor(obj, key);
      if (descriptor.enumerable) {
        mergedObject[key] = value;
      } else {
        Object.defineProperty(mergedObject, key, {
          value,
        });
      }
    });
  });

  return mergedObject;
}

function all(inputObj, fn) {
  return getAllKeyValuePairs(inputObj).every(spreadAndApply(fn));
}

function some(inputObj, fn) {
  return getAllKeyValuePairs(inputObj).some(spreadAndApply(fn));
}

export { map, filter, invert, merge, all, some };
