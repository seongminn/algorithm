/**
 * 20124. 모르고리즘 회장님 추천 받습니다.
 *
 * 작성자: seongminn
 * 언어: node.js
 * 사용 메모리: 51,272 KB
 * 소요 시간: 628 ms
 * 해결 날짜: 2022년 12월 22일
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input.slice(1).map((item) => item.split(' '));
arr.sort((a, b) => {
  if (a[1] !== b[1]) return b[1] - a[1];
  else {
    if (a[0] < b[0]) return -1;
  }
});

console.log(arr[0][0]);
