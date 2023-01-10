/**
 * 1931. 회의실 배정
 *
 * 작성자: seongminn
 * 난이도: Silver 1
 * 언어: node.js
 * 사용 메모리: 45,852 KB
 * 소요 시간: 460 ms
 * 해결 날짜: 2022년 1월 10일
 */

let [m, ...args] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .split('\n');
let times = args
  .map((arr) => arr.split(' ').map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
let static = times.shift()[1];
let cnt = 1;

times.forEach(([start, end]) => {
  if (static <= start) {
    static = end;
    cnt++;
  }
});

console.log(cnt);
