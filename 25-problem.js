const BigNumber = require('big-number');
/*
 The Fibonacci sequence is defined by the recurrence relation:

 Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
 Hence the first 12 terms will be:

 F1 = 1
 F2 = 1
 F3 = 2
 F4 = 3
 F5 = 5
 F6 = 8
 F7 = 13
 F8 = 21
 F9 = 34
 F10 = 55
 F11 = 89
 F12 = 144
 The 12th term, F12, is the first term to contain three digits.

 What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
 */

const LIMIT = 1000;

console.log('result', solve(LIMIT));

function *genFib() {
  let current = BigNumber(1), next = BigNumber(1);
  while(true) {
    yield current;
    [current, next] = [next, current.plus(next)];
  }
}

function solve(limit) {
  let index = 1;

  for (let num of genFib()) {
    if (num.toString().length === limit) {
      return index;
    }
    index++;
  }
}

