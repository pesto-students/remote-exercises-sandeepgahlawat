// eslint-disable-next-line arrow-body-style
const sumEvenArgs = (...args) => {
  return args.filter((el) => el % 2 === 0).reduce((elA, elB) => elA + elB, 0);
};
export { sumEvenArgs };
