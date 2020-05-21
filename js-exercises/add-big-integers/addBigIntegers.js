/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable camelcase */
function calculateSumOfNumbers(str1, str2) {
  let sum = '';
  const str1Length = str1.length;
  const str2Length = str2.length;

  if (str2Length > str1Length) {
    const temp = str2;
    str2 = str1;
    str1 = temp;
  }

  let carry = 0;
  let str1_Ith_DigitFromRight;
  let str2_Ith_DigitFromRight;
  let temp;
  let digitSum;
  for (let i = 0; i < str1.length; i += 1) {
    str1_Ith_DigitFromRight = parseInt(str1.charAt(str1.length - 1 - i));
    str2_Ith_DigitFromRight = parseInt(str2.charAt(str2.length - 1 - i));
    str2_Ith_DigitFromRight = str2_Ith_DigitFromRight ? str2_Ith_DigitFromRight : 0;

    temp = (
      carry + str1_Ith_DigitFromRight + str2_Ith_DigitFromRight
    ).toString();
    digitSum = temp.charAt(temp.length - 1);

    carry = parseInt(temp.substr(0, temp.length - 1));
    carry = carry ? carry : 0;

    sum = i === str1.length - 1 ? temp + sum : digitSum + sum;
  }

  return sum;
}

function addBigIntegers(intString) {
  const numberStrings = intString.split('\n');

  let currentSum = '';
  for (let i = 1; i < numberStrings.length; i += 1) {
    if (i === 1) {
      currentSum = calculateSumOfNumbers(numberStrings[0], numberStrings[i]);
    } else {
      currentSum = calculateSumOfNumbers(currentSum, numberStrings[i]);
    }
  }

  return currentSum;
}

export { addBigIntegers };
