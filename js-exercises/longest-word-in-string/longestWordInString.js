function longestWordInString(inputString) {
  let wordMaxLength = 0;
  let maxLengthWord = '';
  const words = inputString.split(' ');
  words.forEach((word) => {
    if (word.length > wordMaxLength) {
      wordMaxLength = word.length;
      maxLengthWord = word;
    }
  });
  return maxLengthWord;
}

export { longestWordInString };
