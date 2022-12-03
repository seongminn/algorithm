/**
 * 원의 반지름을 이용한 풀이법
 *
 * i ** 2 + j ** 2 <= d ** 2이므로, d와 i만 알면 j의 최댓값을 구할 수 있다.
 *
 * 즉, 반복문을 하나만 사용할 수 있다.
 *
 * @param {number} k
 * @param {number} d
 * @returns {number}
 */
function dot(k, d) {
  let answer = 0;

  for (let i = 0; i <= d; i += k) {
    const j = Math.sqrt(d ** 2 - i ** 2);

    answer += Math.floor(j / k) + 1;
  }

  return answer;
}

/**
 * 처음 작성한 코드
 *
 * 로직은 맞지만, k와 d의 범위가 1이상 1,000,000이하이므로 유효성 에러가 발생한다.
 *
 * @param {number} k
 * @param {number} d
 * @returns {number}
 */
function worse_dot(k, d) {
  let answer = 0;

  for (let i = 0; i <= d; i += k) {
    for (let j = 0; j <= d; j += k) {
      if (i ** 2 + j ** 2 <= d ** 2) answer++;
    }
  }

  return answer;
}
