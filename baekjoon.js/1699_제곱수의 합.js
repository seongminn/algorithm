/**
 * 1699. 제곱수의 합
 *
 * 작성자: seongminn
 * 난이도: Silver 2
 * 언어: node.js
 * 사용 메모리: 13,600 KB
 * 소요 시간: 372 ms
 * 해결 날짜: 2022년 1월 14일
 */

let input = Number(require('fs').readFileSync('input.txt').toString());
const dp = Array.from({ length: input + 1 }, () => 0);
let primes = Array.from({ length: input }, (_, idx) => idx + 1);

dp[1] = 1;

for (let i = 2; i * i <= input; i++) {
  dp[i * i] = 1;
  primes = primes.filter((item) => {
    if (item !== i && item % i === 0) return item;
  });
}

for (let i = 2; i <= input; i++) {
  if (dp[i]) continue;
  if (!((i - 1) % 4) && primes.includes(i)) {
    dp[i] = 2;
    continue;
  }

  let value = Infinity;

  for (let j = 1; j * j <= i; j++) {
    value = Math.min(value, dp[j * j] + dp[i - j * j]);
  }

  dp[i] = value;
}

console.log(dp[input]);
// console.log(Object.assign({}, dp));

// {
//   '0': 0,
//   '1': 1,
//   '2': 2,
//   '3': 3,
//   '4': 1,
//   '5': 2,
//   '6': 3,
//   '7': 4,
//   '8': 2,
//   '9': 1,
//   '10': 2,
//   '11': 3,
//   '12': 3,
//   '13': 2,
//   '14': 3,
//   '15': 4,
//   '16': 1,
//   '17': 2,
//   '18': 2,
//   '19': 3,
//   '20': 2,
//   '21': 2,
//   '22': 3,
//   '23': 4,
//   '24': 3,
//   '25': 1,
//   '26': 2,
//   '27': 3,
//   '28': 4,
//   '29': 2,
//   '30': 3,
//   '31': 4,
//   '32': 2,
//   '33': 2,
//   '34': 2,
//   '35': 3,
//   '36': 1,
//   '37': 2,
//   '38': 3,
//   '39': 4,
//   '40': 2,
//   '41': 2
// }

// console.log(dp[input]);

// let input = Number(require('fs').readFileSync('input.txt').toString());
// const dp = Array.from({ length: input + 1 }, () => 0);

// for (let i = 1; i * i <= input; i++) {
//   dp[i * i] = 1;
// }

// for (let i = 2; i <= input; i++) {
//   if (dp[i]) continue;
//   if (!((i - 1) % 4)) {
//     dp[i] = 2;
//     continue;
//   }

//   let now = i;

//   while (now) {
//     let sqrt = ~~Math.sqrt(now);

//     dp[i] += dp[sqrt ** 2];
//     now -= sqrt ** 2;
//   }
// }

// console.log(Object.assign({}, dp));

// // console.log(dp[input]);
