/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
// You can change the `args`

function* subsets(values, offset = 0) {
  while (offset < values.length) {
    const first = values[offset++];
    for (const subset of subsets(values, offset)) {
      subset.push(first);
      yield subset;
    }
  }
  yield [];
}

function iterPowerSet(inputSet) {
  const allSubsets = new Set();
  for (const subset of subsets([...inputSet])) {
    allSubsets.add(subset);
  }
  return allSubsets;
}

export {
  iterPowerSet,
};
