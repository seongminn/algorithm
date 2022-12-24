/**
 * 1912. 연속합
 *
 * 작성자: seongminn
 * 난이도: Silver 2
 * 언어: node.js
 * 사용 메모리: 15,732 KB
 * 소요 시간: 204 ms
 * 해결 날짜: 2022년 12월 25일
 */

const fs = require('fs');
let [num, arr] = fs.readFileSync('input.txt').toString().split('\n');
arr = arr.split(' ').map(Number);

const dp = Array.from({ length: num }, (_, idx) => {
  return !idx ? arr.shift() : 0;
});

arr.forEach((num, idx) => {
  dp[idx + 1] = Math.max(num, num + dp[idx]);
});

console.log(Math.max(...dp));
