/**
 * A 배열의 가장 작은 수와 B 배열의 가장 큰 수를 차례로 곱할 때 최솟값이 나온다.
 *
 * @param {number[]} A
 * @param {number[]} B
 * @returns {number}
 */
function create_min(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((total, cur, idx) => total + cur * B[idx], 0);
}
