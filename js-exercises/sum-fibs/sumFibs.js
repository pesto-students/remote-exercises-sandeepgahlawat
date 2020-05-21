function isOddNumber(value) {
  return value % 2 === 0;
}

function sumFibs(number) {
  const fibonacciSeries = [1, 1];
  for (let i = 1; i < number + 1; i += 1) {
    const currentFiboNumber = fibonacciSeries[i - 1] + fibonacciSeries[i];
    if (isOddNumber(currentFiboNumber)) fibonacciSeries.push(currentFiboNumber);
  }
  return fibonacciSeries;
}

export { sumFibs };
