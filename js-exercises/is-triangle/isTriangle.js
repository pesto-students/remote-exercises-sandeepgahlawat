/**
 * This function follows the triangle inequality theorem to test whether the three side can
 * form a triangle or not.
 * The theorem states that sum of any two sides must be greater than the 3rd
 * and we need to test all possible combinations
 * @param {*} sideA
 * @param {*} sideB
 * @param {*} sideC
 * [for further reading on theorem](https://www.mathwarehouse.com/geometry/triangles/triangle-inequality-theorem-rule-explained.php)
 */
function isTriangle(sideA, sideB, sideC) {
  const sumAB = sideA + sideB;
  const sumBC = sideB + sideC;
  const sumAC = sideA + sideC;

  return sumAB > sideC && sumBC > sideA && sumAC > sideB;
}

export { isTriangle };
