const [m, ...triangle] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .split('\n')
  .map((item) => item.split(' ').map(Number));
const dp = Array.from({ length: m }, () => 0);
let cur_idx = 0;

dp[0] = triangle[0];

for (let i = 1; i < m; i++) {}

// dp[0] = Number(triangle[0]);
// dp[1] =
//   dp[0] +
//   Math.max(
//     ...triangle[1].map((item, idx) => {
//       return Math.max(item + triangle[2][idx], item + triangle[2][idx + 1]);
//     })
//   );

console.log(dp[1]);
