/**
 * 1057. 토너먼트
 *
 * 작성자: seongminn
 * 난이도: Silver 4
 * 언어: node.js
 * 사용 메모리: 9,344 KB
 * 소요 시간: 128 ms
 * 해결 날짜: 2023년 9월 1일
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [_, a, b] = require('fs')
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map(Number);
let answer = 0;

while (a !== b) {
  a = Math.ceil(a / 2);
  b = Math.ceil(b / 2);
  answer++;
}

console.log(answer);
