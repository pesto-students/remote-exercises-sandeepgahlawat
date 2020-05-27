function chunkArrayInGroups(array, chunkSize) {
  return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, index) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    array.slice(index * chunkSize, index * chunkSize + chunkSize));
}

export { chunkArrayInGroups };
