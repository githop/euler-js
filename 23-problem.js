/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28,
which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and
it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16,
the smallest number that can be written as the sum of two abundant numbers is 24.
By mathematical analysis, it can be shown that all integers greater than 28123
can be written as the sum of two abundant numbers.
However, this upper limit cannot be reduced any further by analysis even though it is known
that the greatest number that cannot be expressed as the sum of two abundant numbers is less
than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

*/

function isAbundantNum(num) {
  let i = 1;
  let t = 0;
  for (; i < num; i++) {
    if (num % i === 0) {
      t += i;
    }
  }
  return (t > num);
}

function gatherAbundantNums(limit) {
  let abundantNums = [];
  let i = 1;
  for (; i < limit; i++) {
    if (isAbundantNum(i)) {
      abundantNums.push(i);
    }
  }

  return abundantNums;
}


solve(28123);

function solve(limit) {

  let nums = gatherAbundantNums(limit);
  let isAbundantSum = {};

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; i < nums.length; j++) {
      if (nums[i] + nums[j] <= limit) {
        isAbundantSum[nums[i] + nums[j]] = true;
      } else {
        break;
      }
    }
  }

  let sum = 0, k = 1;
  for (; k < limit; k++) {
    if (!isAbundantSum[k]) {
      sum += k;
    }
  }

  console.log('result', sum);
}

