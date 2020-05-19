function sumAll(numberArray) {
  const firstNumber = numberArray[0];
  const secondNumber = numberArray[1];

  if (firstNumber > secondNumber) {
    return (
      (firstNumber - secondNumber + 1) * ((firstNumber + secondNumber) / 2)
    );
  }
  return (secondNumber - firstNumber + 1) * ((firstNumber + secondNumber) / 2);
}

export { sumAll };
