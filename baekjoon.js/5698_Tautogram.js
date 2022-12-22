/**
 * 5698. Tautogram
 *
 * 작성자: seongminn
 * 난이도: Bronze 2
 * 언어: node.js
 * 사용 메모리: 12,152 KB
 * 소요 시간: 256 ms
 * 해결 날짜: 2022년 12월 21일
 */

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

input.forEach((str) => {
  if (str[0] === '*') return;

  const head = str.split(' ').map((letter) => letter[0].toLocaleLowerCase());

  return head.every((letter) => letter === head[0])
    ? console.log('Y')
    : console.log('N');
});

// const fs = require('fs');
// const input = fs.readFileSync('ex.txt').toString().split('\n');

// while (true) {
//   const str = input.shift().split(' ');

//   if (str[0] === '*') break;

//   const check = str[0][0].toLowerCase();
//   let correct = true;

//   for (let i = 1; i < str.length; i++) {
//     if (str[i][0].toLowerCase() !== check) {
//       correct = !correct;
//       break;
//     }
//   }

//   console.log(correct ? 'Y' : 'N');
// }
