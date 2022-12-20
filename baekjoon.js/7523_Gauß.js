/**
 * 7523. Gauß
 *
 * 작성자: seongminn
 * 난이도: Bronze 3
 * 언어: node.js
 * 사용 메모리: 11,188 KB
 * 소요 시간: 224 ms
 * 해결 날짜: 2022년 12월 20일
 */

const { stdin, stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

let num = 0;
let cnt = 1;

rl.on('line', (input) => {
  if (!num) num = Number(input);
  else {
    const [n, m] = input.split(' ').map((x) => +x),
      res = (BigInt(m - n + 1) * BigInt(n + m)) / 2n;

    console.log(`Scenario #${cnt}:\n${res}\n`);

    if (num === cnt++) rl.close();
  }
});

rl.on('close', () => {
  process.exit();
});
