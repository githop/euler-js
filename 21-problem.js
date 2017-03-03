/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b,
then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110;
therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142;
so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/


function divisorsArr(num) {
  let divisors = [];
  let i = 1;
  for (; i < num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

function sumDivisors(num) {
  return divisorsArr(num).reduce((total, num) => total + num, 0);
}

function isAmicableNum(num) {
  let a = sumDivisors(num);
  let b = sumDivisors(a);
  return (a !== b && num === b)  
}

function solve(num) {
  let amicableNums = [];
  while (num > 0) {
    if (isAmicableNum(num)) {
      amicableNums.push(num);
    }
    num--;
  }

  return amicableNums.reduce((total, num) => total + num, 0);
}

console.log('result:', solve(10000)); //31626
