/**
 * n에 1씩 더해가며 1의 개수를 비교한다.
 *
 * 이 때, `toString(2)`를 통해 2진수로 변환하고 정규식을 통해 1의 개수를 비교한다.
 *
 * @param {number} n
 * @returns {number}
 */

function nextBigNumber(n) {
  let binary = n.toString(2).match(/1/g).length;

  while (n++) {
    if (n.toString(2).match(/1/g).length === binary) return n;
  }
}
