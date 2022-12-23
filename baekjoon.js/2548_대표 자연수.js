/**
 * 2548. 대표 자연수
 *
 * 작성자: seongminn
 * 난이도: Silver 3
 * 언어: node.js
 * 사용 메모리: 11,032 KB
 * 소요 시간: 180 ms
 * 해결 날짜: 2022년 12월 23일
 */

const fs = require('fs');
let [cnt, arr] = fs.readFileSync('input.txt').toString().split('\n');
arr = arr
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(arr[~~((cnt - 1) / 2)]);

// const fs = require('fs');
// let [cnt, arr] = fs.readFileSync('input.txt').toString().split('\n');
// arr = arr
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);

// let comp = [0, 1e9];

// arr.forEach((num) => {
//   const sum = arr.reduce((acc, cur) => (acc += Math.abs(cur - num)), 0);

//   console.log(comp, sum);

//   if (sum < comp.at(-1)) comp = [num, sum];
// });

// console.log(comp.at(0));
