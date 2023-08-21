/**
 * 1063. 킹
 *
 * 작성자: seongminn
 * 난이도: Silver 3
 * 언어: node.js
 * 사용 메모리: 9,344 KB
 * 소요 시간: 124 ms
 * 해결 날짜: 2023년 8월 21일
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [head, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const direction = {
  R: [1, 0],
  L: [-1, 0],
  B: [0, -1],
  T: [0, 1],
  RT: [1, 1],
  LT: [-1, 1],
  RB: [1, -1],
  LB: [-1, -1],
};

const meta = head.split(' ');
const N = +meta.pop();
let [kx, ky] = getAscii(meta.shift());
let [rx, ry] = getAscii(meta.shift());

input.forEach((dir) => {
  const [x, y] = direction[dir.trim()];

  if (!inRange(kx + x, ky + y)) return;

  if (kx + x === rx && ky + y === ry) {
    if (!inRange(rx + x, ry + y)) return;

    rx = rx + x;
    ry = ry + y;
  }

  kx = kx + x;
  ky = ky + y;
});

console.log([String.fromCharCode(kx), ky].join(''));
console.log([String.fromCharCode(rx), ry].join(''));

function getAscii(input) {
  const [alpha, number] = input.split('');

  return [+alpha.charCodeAt(), +number];
}

function inRange(x, y) {
  return x <= 72 && x >= 65 && y <= 8 && y >= 1;
}
