/*
 Number spiral diagonals
 Problem 28
 Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

 21 22 23 24 25
 20  7  8  9 10
 19  6  1  2 11
 18  5  4  3 12
 17 16 15 14 13

 It can be verified that the sum of the numbers on the diagonals is 101.

 What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
 */

console.log(sumSpiral(1001, 0));

function sumSpiral(size, total) {
  if (size >= 1) {

    if (size === 1) {
      return total + size;
    }

    let topRight = Math.pow(size, 2);
    let topLeft = topRight - (size - 1);
    let bottomLeft = topLeft - (size - 1);
    let bottomRight = bottomLeft - (size - 1);

    total += topRight + bottomRight + topLeft + bottomLeft;

    return sumSpiral(size - 2, total);
  }
}


