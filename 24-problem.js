/*
 A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

 012   021   102   120   201   210

 What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */

let p = [0,1,2,3,4,5,6,7,8,9];

const LIMIT = 1000000;


console.log('result:', solve(p, LIMIT));

function solve(arr, limit) {
  let count = 2;
  let currentPerm = generatePermutation(arr);
  // console.log('first', arr);
  while (count < limit) {
    // console.log('next', currentPerm);
    currentPerm = generatePermutation(currentPerm);
    count++;
  }
  return currentPerm.join('');
}

function generatePermutation(arr) {
  let len = arr.length;
  let kIndex;

  for (; len > 0; --len) {
    if (arr[len - 1] < arr[len]) {
      kIndex = len - 1;
      break;
    }
  }

  let iIndex = kIndex + 1;
  len = arr.length;
  for (; len > iIndex; --len) {
    if (arr[kIndex] < arr[len]) {
      iIndex = len;
      break;
    }
  }

  return reverseFrom(swap(arr, kIndex, iIndex), kIndex + 1);
}

function swap(arr, k, i) {
  let copy = arr.slice(0);
  let tmp = copy[i];
  copy[i] = copy[k];
  copy[k] = tmp;
  return copy
}

function reverseFrom(arr, index) {
  return arr
      .slice(0, index)
      .concat(arr.slice(index).reverse());
}
