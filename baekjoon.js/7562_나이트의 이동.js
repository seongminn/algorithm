/**
 * 7562. 나이트의 이동
 *
 * 작성자: seongminn
 * 난이도: Silver 1
 * 언어: node.js
 * 사용 메모리: 30,140 KB
 * 소요 시간: 584 ms
 * 해결 날짜: 2023년 01월 11일
 */

const input = require('fs').readFileSync('input.txt').toString().split('\n');
const m = Number(input.shift());

const dxs = [-2, -1, 1, 2, 2, 1, -1, -2];
const dys = [1, 2, 2, 1, -1, -2, -2, -1];

for (let i = 0; i < m; i++) {
  const n = Number(input.shift());
  const [cx, cy] = input.shift().split(' ').map(Number);
  const [gx, gy] = input.shift().split(' ').map(Number);
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  visited[cy][cx] = 1;
  console.log(search([cx, cy, 0], [gx, gy], n, visited));
}

function in_range(x, y, n) {
  return 0 <= x && x < n && 0 <= y && y < n;
}

function search(cur, [gx, gy], n, visited) {
  const queue = [cur];

  while (queue.length > 0) {
    let [x, y, cnt] = queue.shift();

    if (x === gx && y === gy) return cnt;

    for (let i = 0; i < 8; i++) {
      let nx = x + dxs[i];
      let ny = y + dys[i];

      if (in_range(nx, ny, n) && !visited[ny][nx]) {
        queue.push([nx, ny, cnt + 1]);
        visited[ny][nx] = 1;
      }
    }
  }
}
