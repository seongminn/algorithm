/**
 * 사과 한 박스의 값을 구할 때 가장 작은 점수만 사용한다는 점을 활용한 방법
 *
 * 사과 점수를 내림차순으로 정렬했을 때 m번째 값이 바로 한 박스의 가격을 결정하는 값이다.
 *
 * @param {number} k
 * @param {number} m
 * @param {number[]} score
 * @returns {number}
 */
function apple_box(k, m, score) {
  score.sort((a, b) => b - a);

  let answer = 0;

  for (let i = m; i <= score.length; i += m) {
    answer += score[i - 1] * m;
  }

  return answer;
}

/**
 * 사과 한 박스를 일일이 생성하는 방법
 *
 * 시간 초과가 발생했다.
 * 반복문을 돌리는 횟수는 동일하지만 score를 잘라내는 과정이 추가가 되어서 그런가?
 *
 * @param {number} k
 * @param {number} m
 * @param {number[]} score
 * @returns {number}
 */
function worse_apple_box(k, m, score) {
  score.sort((a, b) => b - a);

  let answer = 0;

  while (score.length >= m) {
    const minVal = score.splice(0, m).at(-1);

    answer += minVal * m;
  }

  return answer;
}
