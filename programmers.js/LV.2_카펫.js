/**
 * yellow의 약수를 구한다. 약수는 곧 노란색 격자의 가로, 세로 길이를 의미한다.
 *
 * 노란색 격자의 가로, 세로 합이 `brown - 4`라면 `[가로 + 2, 세로 + 2]`를 반환한다.
 *
 * @param {number} brown
 * @param {number} yellow
 * @returns {number[]}
 */
function carpet(brown, yellow) {
  let row;
  let col;

  for (let i = 1; i * i <= yellow; i++) {
    row = ~~(yellow / i);
    col = i;

    if (yellow % i === 0 && (row + col) * 2 === brown - 4)
      return [row + 2, col + 2];
  }
}

/**
 * 처음 작성한 풀이
 *
 * 단순하게 brown + yellow 한 뒤 해당 값의 약수 묶음 중 차가 가장 작은 것을 선택했다.
 *
 * 그랬더니 18, 6 → [6, 4]가 나왔음
 * 답은 [8, 3]
 *
 * @param {number} brown
 * @param {number} yellow
 * @returns {number[]}
 */
function first_carpet(brown, yellow) {
  const square = brown + yellow;

  for (let i = ~~Math.sqrt(square); i >= 1; i--) {
    if (square % i === 0) {
      return [~~(square / i), i];
    }
  }
}
