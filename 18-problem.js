const fs = require('fs');
/*
 By starting at the top of the triangle below and moving to adjacent numbers on
 the row below, the maximum total from top to bottom is 23.

 03
 07 04
 02 04 06
 08 05 09 03

 ~ Solution ~

 from the bottom row of triangle, create a triangle abc
 where b and c are two adjacent numbers in the bottom row
 and a is in the row above.

 in the example above, the three triangles woudld be:
 02       04     06
 08 05 - 05 09 - 09 03 

 to figure out which path to take, for each triangle above
 calculate this formula:
 a + max(b, c)
 keep each result in an array and replace the bottom two rows with the newly
 created array, as follows:

 03
 07 04
 10 13 15

 repeat the process again:
 03
 20 19

 and the final time the sum of the best possible paths is folded into the result:
 23
 */

let triArr = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]
];

//Find the maximum total from top to bottom of the triangle below:
var probArr = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 04, 82, 47, 65],
  [19, 01, 23, 75, 03, 34],
  [88, 02, 77, 73, 07, 63, 67],
  [99, 65, 04, 28, 06, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]
];

fs.readFile('./p067_triangle.txt', 'utf8', solve);

function dynamicSum(arr) {
  if (arr.length > 1) {
    let last = arr.pop();
    let aboveRow = arr.pop();
    let nextRow = [];
    for (let i = 0; i < aboveRow.length; i++) {
      let [a, b, c] = [aboveRow[i], last[i], last[i + 1]];
      nextRow.push(a + Math.max(b, c));
    }
    arr.push(nextRow);
    dynamicSum(arr);
  }
  return flatten(arr)[0];
}

function flatten(arr) {
  return arr.reduce(function(a, b) {
    if (Array.isArray(b)) {
      return a.concat(flatten(b));
    }
    return a.concat(b);
  }, []);
}

function solve(err, data) {
  if (err) throw err;

  let result = data.split('\n').reduce((arr, line) => {
    const l = line.split(' ');
    arr.push(l.map((i) => parseInt(i, 10)));
    return arr;
  }, []);
  result.pop();
  console.log(dynamicSum(result));
}