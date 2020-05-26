function diffArray(arrayA, arrayB) {
  const uniqueElementsA = arrayA.filter((value) => arrayB.indexOf(value) === -1);
  const uniqueElementsB = arrayB.filter((value) => arrayA.indexOf(value) === -1);

  return uniqueElementsA.concat(uniqueElementsB);
}

export { diffArray };
