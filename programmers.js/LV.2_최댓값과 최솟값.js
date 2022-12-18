/**
 * `Math.min` / `Math.max` → 문자열에 대해서도 숫자 비교가 가능하다고 함
 *
 * @param {string} s
 * @returns {string}
 */
function min_max(s) {
  const arr = s.split(' ');

  return Math.min(...arr) + ' ' + Math.max(...arr);
}

/**
 * 1. 문자열을 공백을 기준으로 분할하여 정수형으로 만든 뒤 정렬한다.
 * 2. 첫번째 값과 마지막 값을 배열에 넣고 공백을 기준으로 join하여 반환한다.
 *
 * @param {string} s
 * @returns {string}
 */
function first_min_max(s) {
  const arr = s
    .split(' ')
    .map((item) => Number(item))
    .sort((a, b) => a - b);

  return [arr[0], arr.at(-1)].join(' ');
}
