/**
 * 1012. 유기농 배추
 *
 * 작성자: seongminn
 * 난이도: Silver 2
 * 언어: node.js
 * 사용 메모리: 12,400 KB
 * 소요 시간: 192 ms
 * 해결 날짜: 2022년 1월 3일
 */

const input = require('fs').readFileSync('input.txt').toString().split('\n');
const tc = Number(input.shift());
const dxs = [0, 1, 0, -1];
const dys = [1, 0, -1, 0];

for (let t = 0; t < tc; t++) {
  const [m, n, k] = input.shift().split(' ').map(Number);
  const field = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );
  let cnt = 0;

  for (let i = 0; i < k; i++) {
    const [x, y] = input.shift().split(' ').map(Number);

    field[y][x] = 1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (field[i][j] === 1) {
        search(j, i);
        cnt++;
      }
    }
  }

  console.log(cnt);

  function in_range(x, y) {
    return 0 <= x && x < m && 0 <= y && y < n;
  }

  function search(x, y) {
    field[y][x] = 2;

    for (let d = 0; d < 4; d++) {
      const nx = x + dxs[d];
      const ny = y + dys[d];

      if (in_range(nx, ny) && field[ny][nx] === 1) search(nx, ny);
    }
  }
}
