/* eslint-disable radix */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
function freqSort(inputArray) {
  const frequency = new Map();
  inputArray
    .map((value) => {
      const result = [];
      let index = 0;
      while (index < value.length) {
        result.push(value.codePointAt(index));
        index += 1;
      }
      return result.toString();
    })
    .forEach((codePoint) => {
      if (frequency.has(codePoint)) {
        frequency.set(codePoint, frequency.get(codePoint) + 1);
      } else {
        frequency.set(codePoint, 1);
      }
    });
  return [...frequency]
    .sort(([key1, value1], [key2, value2]) => {
      if (value1 > value2) return -1;
      if (value1 < value2) return 1;
      return 0;
    })
    .map(([k, _]) => String.fromCodePoint.apply(null, k.split(",").map((cp) => parseInt(cp))));
}

export { freqSort };
