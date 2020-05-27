/* eslint-disable arrow-body-style */
const animalSort = (animals) => {
  return animals.sort((animalA, animalB) => {
    if (animalA.numberOfLegs < animalB.numberOfLegs) return -1;
    if (animalA.numberOfLegs > animalB.numberOfLegs) return 1;

    if (animalA.name < animalB.name) return -1;
    if (animalA.name > animalB.name) return 1;
    return 0;
  });
};

export { animalSort };
