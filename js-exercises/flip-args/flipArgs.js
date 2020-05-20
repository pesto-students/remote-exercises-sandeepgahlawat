function flipArgs(func) {
  return (...args) => func(...args.reverse());
}

export { flipArgs };
