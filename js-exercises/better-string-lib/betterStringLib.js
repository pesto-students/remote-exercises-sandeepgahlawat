/* eslint-disable no-plusplus */
/* eslint-disable quotes */

const regexSymbolWithCombiningMarks = /(\P{Mark})(\p{Mark}+)/gu;
const regexSurrogatePair = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;

const reverse = (input) => {
  const str = input
    .replace(regexSymbolWithCombiningMarks, ($0, $1, $2) => reverse($2) + $1)
    .replace(regexSurrogatePair, "$2$1");

  const result = [];
  let index = str.length;
  while (index--) {
    result.push(str.charAt(index));
  }
  return result.join("");
};

const getCodePointsOfAString = (string) => {
  let index = 0;
  const codePoint = [];
  while (index < string.length) {
    codePoint.push(string.charCodeAt(index));
    index++;
  }
  return codePoint;
};

const equal = (stringA, stringB) => {
  const codePointA = getCodePointsOfAString(stringA);
  const codePointB = getCodePointsOfAString(stringB);
  if (codePointA.length !== codePointB.length) return false;

  return codePointA.every((value, index) => value === codePointB[index]);
};

export { reverse, equal };
