function duplicateLetters(input) {
  const chars = {};
  let maxduplicates = 0;

  for (let i = 0; i < input.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(chars, input[i])) {
      chars[input[i]] += 1;
    } else {
      chars[input[i]] = 1;
    }
  }
  for (const prop in chars) {
    if (chars[prop] > 1 && chars[prop] > maxduplicates) {
      maxduplicates = chars[prop];
    }
  }
  return maxduplicates < 1 ? false : maxduplicates;
}

export { duplicateLetters };
