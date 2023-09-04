/**
 * 1120. 문자열
 *
 * 작성자: seongminn
 * 난이도: Silver 4
 * 언어: node.js
 * 사용 메모리: 9,340 KB
 * 소요 시간: 128 ms
 * 해결 날짜: 2023년 9월 4일
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [A, B] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ');

let answer = 1e9;

for (let i = 0; i < B.length - A.length + 1; i++) {
  const slicedB = B.slice(i, i + A.length);

  answer = Math.min(answer, getDiffs(A, slicedB));
}

console.log(answer);

function getDiffs(a, b) {
  return a
    .split('')
    .reduce((acc, cur, idx) => (cur !== b[idx] ? acc + 1 : acc), 0);
}
