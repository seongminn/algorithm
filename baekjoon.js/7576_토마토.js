/**
 * 7576. 토마토
 *
 * 작성자: seongminn
 * 난이도: Gold 5
 * 언어: node.js
 * 사용 메모리: 12,400 KB
 * 소요 시간: 192 ms
 * 해결 날짜: 2022년 1월 5일
 */

const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [m, n] = input.shift().split(' ').map(Number);
let tomato = [];
let ripe = [];
let day = 0;

for (let i = 0; i < n; i++) {
  const t = input.shift().split(' ').map(Number);
  tomato.push(t);

  t.forEach((num, idx) => num === 1 && ripe.push([idx, i]));
}

const dxs = [0, 0, 1, -1];
const dys = [1, -1, 0, 0];

bfs();

tomato.forEach((arr) => {
  if (arr.includes(0)) day = -1;
});

console.log(day);

function bfs() {
  let idx = 0;

  while (ripe.length !== idx) {
    let [x, y] = ripe[idx];

    for (let d = 0; d < 4; d++) {
      const nx = x + dxs[d];
      const ny = y + dys[d];

      if (in_range(nx, ny) && !tomato[ny][nx]) {
        tomato[ny][nx] = tomato[y][x] + 1;
        day = tomato[y][x];
        ripe.push([nx, ny]);
      }
    }

    idx++;
  }
}

function in_range(x, y) {
  return 0 <= x && x < m && 0 <= y && y < n;
}
