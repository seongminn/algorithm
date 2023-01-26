/**
 * 1264. 모음의 개수
 *
 * 작성자: seongminn
 * 언어: node.js
 * 사용 메모리: 9,584 KB
 * 소요 시간: 156 ms
 * 해결 날짜: 2022년 12월 19일
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const verbo = ['a', 'e', 'i', 'o', 'u'];
let cnt;

rl.on('line', (line) => {
  if (line === '#') rl.close();

  cnt = line
    .split('')
    .filter((word) => verbo.includes(word.toLowerCase())).length;
  console.log(cnt);
});

rl.on('close', () => {
  process.exit();
});
