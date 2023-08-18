function solution(n) {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    if (Number.isInteger(i / 2)) {
      dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2]);
    } else {
      dp[i] = dp[i - 1] + 1;
    }
  }

  return dp[n];
}

function solution(n) {
  let answer = 0;

  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n--;
      answer++;
    }
  }

  return answer;
}

function solution(n) {
  return n.toString(2).replace(/0/g, '').length;
}
