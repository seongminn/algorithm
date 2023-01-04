/**
 * 1149. RGB거리
 *
 * 작성자: seongminn
 * 난이도: Silver 1
 * 언어: node.js
 * 사용 메모리: 9,596 KB
 * 소요 시간: 128 ms
 * 해결 날짜: 2022년 1월 4일
 */

const input = require('fs').readFileSync('input.txt').toString().split('\n');
const n = Number(input.shift());
const nx = { 0: [1, 2], 1: [0, 2], 2: [0, 1] };
let hold = [0, 0, 0];

for (let i = 0; i < n; i++) {
  const arr = input.shift().split(' ').map(Number);

  for (let j = 0; j < 3; j++) {
    arr[j] += Math.min(hold[nx[j][0]], hold[nx[j][1]]);
  }

  hold = arr;
}

console.log(Math.min(...hold));
