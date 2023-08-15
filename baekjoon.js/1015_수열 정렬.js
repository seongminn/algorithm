/**
 * 1015. 수열 정렬
 *
 * 작성자: seongminn
 * 난이도: Silver 4
 * 언어: node.js
 * 사용 메모리: 9,336 KB
 * 소요 시간: 124 ms
 * 해결 날짜: 2023년 8월 15일
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, input] = require('fs').readFileSync(filePath).toString().split('\n');

const arr = input.split(' ').map(Number);
const sorted = [...arr].sort((a, b) => a - b);

const answer = [];

for (let i = 0; i < +N; i++) {
  for (let j = 0; j < +N; j++) {
    if (arr[i] === sorted[j]) {
      answer.push(j);
      sorted[j] = 'x';
      break;
    }
  }
}

console.log(answer.join(' '));
