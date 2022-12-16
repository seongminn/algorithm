/**
 * 1. s가 1인 경우, 그리고 s가 n보다 작은 경우에 대해 예외처리 한다.
 * 2. s를 n으로 나눈다.
 * 3. n에 -1을 하고 s에는 answer의 마지막 값을 빼준다
 * 3. 이 과정을 n이 1이 될 때까지 반복한 뒤 answer를 반환한다.
 *
 * @param {number} n
 * @param {number} s
 * @returns {number[] | number}
 */
function best_set(n, s) {
  const answer = [];

  if (s === 1 || s < n) return [-1];

  while (n > 0) {
    if (n === 1) return [...answer, s];
    else answer.push(~~(s / n--));

    s = s - answer.at(-1);
  }
}
