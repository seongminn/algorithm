/**
 * 내가 생각한 방법과 로직은 동일하다.
 *
 * 1부터 n까지 순회를 돌며 n의 약수를 찾는다.
 * 약수가 홀수일 경우 cnt에 1을 추가한다.
 *
 * 해당 방법이 가독성 면에서는 훨씬 보기 좋은 것 같다..
 *
 * 다만, n의 값이 커질수록 내가 생각한 방법이 약 2배 정도 빠른 모습을 보여준다.
 *
 * 아무튼 내가 이긴 걸로 생각할거다.
 *
 * @param {number} n
 * @returns {number}
 */
function second_expressions(n) {
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    if (!(n % i) && i % 2 === 1) {
      cnt++;
    }
  }

  return cnt;
}

/**
 * 자연수 n을 연속한 자연수들로 표현하는 방법은 홀수 약수의 개수와 동일하다.
 *
 * 따라서 에라토스테네스의 체 알고리즘을 활용하여 약수의 개수를 구한 뒤
 * 홀수 약수 개수만큼 cnt를 반환한다.
 *
 * 이 때, n이 홀수라면 `n / 2`와 `(n / 2) + 1`로 표현할 수 있기 때문에
 * 초기값을 2로 설정하고, n이 짝수일 경우 1을 빼고 반환한다.
 *
 * 모든 수는 자기 자신을 표현하는 것 역시 연속한 자연수이므로 기본값은 1이다.
 *
 * @param {number} n
 * @returns {number}
 */
function first_expressions(n) {
  const divisor = new Set();
  let cnt = 2;

  if (n === 1) return 1;

  for (let i = 2; i * i <= n; i++) {
    if (!(n % i)) {
      divisor.add(i);
      divisor.add(~~(n / i));
    }
  }

  cnt += Array.from(divisor).filter((num) => num % 2 === 1).length;

  return n % 2 === 1 ? cnt : cnt - 1;
}
