/**
 * 1072. 게임
 *
 * 작성자: seongminn
 * 난이도: Silver 3
 * 언어: node.js
 * 사용 메모리: 9,580 KB
 * 소요 시간: 152 ms
 * 해결 날짜: 2023년 9월 3일
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [X, Y] = require('fs')
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map(Number);

function getRatio(x, y) {
  return Math.floor((y * 100) / x);
}

const start = getRatio(X, Y);
let cnt = 0;

if (start < 99) {
  while (true) {
    X += 100;
    Y += 100;
    cnt += 100;

    if (start !== getRatio(X, Y)) break;
  }

  while (true) {
    X -= 1;
    Y -= 1;
    cnt -= 1;

    if (start === getRatio(X, Y)) break;
  }

  console.log(cnt + 1);
} else {
  console.log(-1);
}

// * -------------------------------------------------

if (getRatio(X, Y) >= 99) {
  return console.log(-1);
}

const changeRate = getRatio(X, Y) + 1;
const ans = Math.ceil((changeRate * X - 100 * Y) / (100 - changeRate));

console.log(ans);
