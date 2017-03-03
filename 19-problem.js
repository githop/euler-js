/*
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.

A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

//Sakamoto Algorithm
function calcDow(y, m, d) {
  let months = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  y -= m < 3;
  return (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + months[m - 1] + d) % 7;
} 

let year = 1901;
let sundays = 0;
for (; year <= 2000; year++) {
  let month = 1;
  for (; month <= 12; month++) {
    let firstDayOfEachMonth = calcDow(year, month, 1);
    if (firstDayOfEachMonth === 0) {
      sundays++;
    }
  }
}

console.log('Amount of Sundays between 1 Jan 1901 and 31 Dec 2000:', sundays);
