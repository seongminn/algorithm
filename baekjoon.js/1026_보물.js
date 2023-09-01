/**
 * 1026. 보물
 *
 * 작성자: seongminn
 * 난이도: Silver 4
 * 언어: node.js
 * 사용 메모리: 9,568 KB
 * 소요 시간: 124 ms
 * 해결 날짜: 2023년 9월 1일
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [N, A, B] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
A = A.split(' ').sort((a, b) => a - b);
B = B.split(' ').sort((a, b) => b - a);

console.log(
  A.reduce((acc, cur, idx) => {
    return (acc += cur * B[idx]);
  }, 0)
);
