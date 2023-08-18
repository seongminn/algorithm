/**
 * 1010. 다리 놓기
 *
 * 작성자: seongminn
 * 난이도: Silver 5
 * 언어: node.js
 * 사용 메모리: 10,528 KB
 * 소요 시간: 156 ms
 * 해결 날짜: 2023년 8월 18일
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().split('\n');

const T = +inputs.shift();

const dp = Array.from({ length: 30 }, (_, idx) =>
  Array.from({ length: idx + 1 }, () => 1)
);

for (let i = 0; i < 30; i++) {
  for (let j = 1; j < i; j++) {
    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
  }
}

for (let i = 0; i < T; i++) {
  const [N, M] = inputs[i].trim().split(' ');

  console.log(dp[M][N]);
}

// inputs.forEach((input) => combination(...input.trim().split(' ').map(Number)));

// function combination(n, m) {
//   let result = 1;

//   for (let i = n; i > 0; i--) {
//     result /= i;
//   }

//   for (let j = m; j > m - n; j--) {
//     result *= j;
//   }

//   console.log(Math.floor(result));
// }
