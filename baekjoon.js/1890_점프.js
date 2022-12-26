/**
 * 1890. 점프
 *
 * 작성자: seongminn
 * 난이도: Silver 1
 * 언어: node.js
 * 사용 메모리: 9,388 KB
 * 소요 시간: 124 ms
 * 해결 날짜: 2022년 12월 26일
 */

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');
const n = input.shift();

const path = input.map((arr) => arr.split(' ').map(Number));
const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => -1));

function search(x, y) {
  if (x === n - 1 && y === n - 1) return 1n;

  if (dp[y][x] === -1) {
    dp[y][x] = 0n;

    const jump = path[y][x];
    const nx = x + jump;
    const ny = y + jump;

    if (nx < n) dp[y][x] += search(nx, y);
    if (ny < n) dp[y][x] += search(x, ny);
  }

  return dp[y][x];
}

search(0, 0);

console.log(`${dp[0][0]}`);
