/**
 * 2004. 조합 0의 개수
 *
 * 작성자: seongminn
 * 난이도: Silver 2
 * 언어: node.js
 * 사용 메모리: 9,388 KB
 * 소요 시간: 208 ms
 * 해결 날짜: 2022년 1월 31일
 */

const [n, m] = require('fs').readFileSync('input.txt').toString().split(' ');

const getTwoFive = (num) => {
  let two = 0;
  let five = 0;

  for (let i = 2; i <= num; i *= 2) {
    two += ~~(num / i);
  }

  for (let i = 5; i <= num; i *= 5) {
    five += ~~(num / i);
  }

  return [two, five];
};

const [nt, nf] = getTwoFive(n);
const [mt, mf] = getTwoFive(m);
const [nmt, nmf] = getTwoFive(n - m);

console.log(Math.min(nt - mt - nmt, nf - mf - nmf));
