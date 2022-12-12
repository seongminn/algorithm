/**
 * 정규식을 활용한 풀이
 *
 * 1. i부터 j까지 k가 포함된 수에 대해 모든 k를 배열로 반환한다.
 * 2. 해당 배열의 길이를 answer에 추가해준다.
 *
 * @param {number} i
 * @param {number} j
 * @param {number} k
 * @returns {number}
 */
function first_babbling(i, j, k) {
  const regex = new RegExp(k, 'g');
  let answer = 0;

  for (let start = i; start <= j; start++) {
    const isContain = String(start).match(regex);

    if (isContain) answer += isContain.length;
  }

  return answer;
}

/**
 * 1. i부터 j까지 모든 수를 일렬로 나열한 문자열을 만든다.
 * 2. 해당 문자열을 k를 기준으로 분할한 배열의 길이 -1을 반환한다.
 *
 * j의 크기가 최대 100,000이기 떄문에 가능한 풀이인 듯
 *
 * @param {number} i
 * @param {number} j
 * @param {number} k
 * @returns {number}
 */
function good_number_k(i, j, k) {
  let answer = '';

  for (i; i <= j; i++) {
    answer += i;
  }

  return answer.split(k).length - 1;
}

/**
 * 리터럴을 극한으로 활용한 풀이
 *
 * @param {number} i
 * @param {number} j
 * @param {number} k
 * @returns {number}
 */
function best_number_k(i, j, k) {
  return (
    Array(j - i + 1)
      .fill(i)
      .map((v, idx) => v + idx)
      .join('')
      .split(k).length - 1
  );
}
