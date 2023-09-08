/**
 * 1193. 분수 찾기
 *
 * 작성자: seongminn
 * 난이도: Silver 5
 * 언어: node.js
 * 사용 메모리: 9,6286 KB
 * 소요 시간: 120 ms
 * 해결 날짜: 2023년 9월 8일
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let X = +require('fs').readFileSync(filePath).toString().trim();
let th = 0;

const up = [];
const down = [];

while (X > 0) {
  th++;
  X -= th;
}

for (let i = 1; i <= th; i++) {
  up.push(th - i + 1);
  down.push(i);
}

if (th % 2 === 0) {
  console.log(`${down[th + X - 1]}/${up[th + X - 1]}`);
} else {
  console.log(`${up[th + X - 1]}/${down[th + X - 1]}`);
}

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let X = +require('fs').readFileSync(filePath).toString().trim();
// let th = 0;

// for (let i = 1; i <= 10000000; i++) {
//   X -= i;

//   if (X <= 0) {
//     th = i;
//     break;
//   }
// }

// const arr = Array.from({ length: th }, (_, idx) => {
//   if (th % 2 === 0) {
//     return `${idx + 1}/${th - idx}`;
//   } else {
//     return `${th - idx}/${idx + 1}`;
//   }
// });

// console.log(arr[X + th - 1]);
