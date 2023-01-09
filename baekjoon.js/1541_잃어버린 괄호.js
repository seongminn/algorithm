/**
 * 1541. 잃어버린 괄호
 *
 * 작성자: seongminn
 * 난이도: Silver 2
 * 언어: node.js
 * 사용 메모리: 9,348 KB
 * 소요 시간: 128 ms
 * 해결 날짜: 2022년 1월 9일
 */

const input = require('fs').readFileSync('input.txt').toString();

console.log(
  input
    .split('-')
    .map((item) =>
      item
        .split('+')
        .map(Number)
        .reduce((acc, cur) => acc + cur)
    )
    .reduce((acc, cur) => acc - cur)
);
