/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

const BigNum = require('big-number');

function facBigNum(num) {
  let sum = new BigNum(1);
  while (num > 0) {
    let bigNum = new BigNum(num);
    sum = bigNum.multiply(sum);
    num--
  }
  return sum.number;
}

function sumFactorialDigits(num) {
  let numArr = facBigNum(num);
  return numArr.reduce((total, num) => total + num, 0);
}

console.log('results:', sumFactorialDigits(100)); //648