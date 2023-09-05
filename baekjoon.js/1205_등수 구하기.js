/**
 * 1205. 등수 구하기
 *
 * 작성자: seongminn
 * 난이도: Silver 4
 * 언어: node.js
 * 사용 메모리: 9,336 KB
 * 소요 시간: 124 ms
 * 해결 날짜: 2023년 9월 5일
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, TAESOO, P] = input.shift().split(' ').map(Number);

if (N === 0) return console.log(1);

const ranks = input.shift().split(' ').map(Number);
let ans = -1;

if (N === P && ranks.at(-1) >= TAESOO) {
  return console.log(-1);
} else {
  ans = N + 1;

  for (let i = 0; i < N; i++) {
    if (ranks[i] <= TAESOO) {
      ans = i + 1;
      break;
    }
  }
}

console.log(ans);
