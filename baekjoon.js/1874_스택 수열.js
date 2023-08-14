/**
 * 1874. 스택 수열
 *
 * 작성자: seongminn
 * 난이도: Silver 2
 * 언어: node.js
 * 사용 메모리: 38,616 KB
 * 소요 시간: 280 ms
 * 해결 날짜: 2022년 2월 5일
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map(Number);
const arr = [];
const answer = [];
let idx = 0;
let i = 1;

while (i <= n) {
  if (arr.at(-1) !== input[idx]) {
    arr.push(i++);
    answer.push('+');
  }
  while (idx < n && arr.at(-1) === input[idx]) {
    console.log(arr, input[idx]);
    arr.pop();
    idx += 1;
    answer.push('-');
  }
}

if (arr.length) console.log('NO');
else console.log(answer.join('\n'));
