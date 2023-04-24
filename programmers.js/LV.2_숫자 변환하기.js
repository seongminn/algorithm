function solution(x, y, n) {
  const dp = Array.from({ length: y + 1 }, () => Infinity);

  dp[x] = 0;

  for (let i = x; i < y; i++) {
    [i + n, 2 * i, 3 * i].forEach((item) => {
      dp[item] = Math.min(dp[i] + 1, dp[item]);
    });
  }

  if (dp[y] === Infinity) return -1;
  else return dp[y];
}
