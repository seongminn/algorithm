/**
 * 1049. 기타줄
 *
 * 작성자: seongminn
 * 난이도: Silver 4
 * 언어: node.js
 * 사용 메모리: 9,348 KB
 * 소요 시간: 124 ms
 * 해결 날짜: 2023년 8월 19일
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const package = Math.min(...input.map((str) => str.split(' ').map(Number)[0]));
const each = Math.min(...input.map((str) => str.split(' ').map(Number)[1]));

console.log(
  Math.min(
    N * each,
    Math.ceil(N / 6) * package,
    Math.floor(N / 6) * package + (N % 6) * each
  )
);
