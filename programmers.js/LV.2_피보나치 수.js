/**
 * 1. dynamic programming을 활용한다.
 * 2. dp 배열을 생성하고 첫번째, 두번쨰 요소를 제외한 모든 값을 0으로 초기화한다.
 * 3. dp의 n번째 값을 할당한다. (dp[n] = (dp[n - 2] + dp[n - 1]) % 1234567)
 * 4. 이 때, 1234567의 나머지로 저장하지 않으면 `int` 범위를 초과하기 때문에 오버플로우가 발생한다.
 *
 * @param {number} n
 * @returns {number}
 */
function fibo(n) {
  const dp = Array.from({ length: n + 1 }).fill(0);

  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    // `% 1234567`를 한번만 할 경우 32bit 정수 범위를 초과하여 오버플로우 발생
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
  }

  return dp[n];
}
