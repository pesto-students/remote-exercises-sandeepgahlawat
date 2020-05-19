function calculateSum(array) {
  let sum = 0;
  if (array.length < 1) return 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
}

function sumPrimes(target) {
  const store = [];
  const primes = [];

  for (let i = 2; i <= target; i += 1) {
    if (!store[i]) {
      primes.push(i);
      // eslint-disable-next-line no-bitwise
      for (let j = i << 1; j <= target; j += i) {
        store[j] = true;
      }
    }
  }
  return calculateSum(primes);
}

export { sumPrimes };
