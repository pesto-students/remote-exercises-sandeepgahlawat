function balancedBraces(string) {
  const stack = [];
  const bracketPairsMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      stack.push(string[i]);
    } else if (string[i] === ')' || string[i] === '}' || string[i] === ']') {
      const last = stack.pop();
      if (string[i] !== bracketPairsMap[last]) {
        return false;
      }
    }
  }
  return !(stack.length !== 0);
}

export { balancedBraces };
