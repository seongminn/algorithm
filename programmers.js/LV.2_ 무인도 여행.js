function solution(maps) {
  const lx = maps[0].length;
  const ly = maps.length;
  const island = maps.map((isl) => [...isl]);
  const visited = maps.map((isl) =>
    Array.from({ length: isl.length }, () => false)
  );
  const dxs = [0, 0, 1, -1];
  const dys = [1, -1, 0, 0];
  const answer = [];

  for (let i = 0; i < ly; i++) {
    for (let j = 0; j < lx; j++) {
      if (!visited[i][j] && island[i][j] !== 'X') answer.push(search(j, i, 0));
    }
  }

  function in_range(x, y) {
    return 0 <= x && x < lx && 0 <= y && y < ly;
  }

  function search(x, y, sum) {
    sum += Number(island[y][x]);
    visited[y][x] = true;

    for (let d = 0; d < 4; d++) {
      let nx = x + dxs[d];
      let ny = y + dys[d];

      if (in_range(nx, ny) && island[ny][nx] !== 'X' && !visited[ny][nx])
        sum = search(nx, ny, sum);
    }

    return sum;
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
