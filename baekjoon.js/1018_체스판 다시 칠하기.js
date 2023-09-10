/**
 * 1018. 체스판 다시 칠하기
 *
 * 작성자: seongminn
 * 난이도: Silver 4
 * 언어: node.js
 * 사용 메모리: 10,172 KB
 * 소요 시간: 192 ms
 * 해결 날짜: 2023년 9월 10일
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const CHESS_BOARD = input.map((element) => element.split(''));
let answer = 1e9;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    answer = Math.min(check(i, j, CHESS_BOARD), answer);
  }
}

console.log(answer);

function check(x, y, arr) {
  let OFFSET_B = 'B';
  let OFFSET_W = 'W';
  let CNT_B = 0;
  let CNT_W = 0;

  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      if (arr[i][j] !== OFFSET_B) CNT_B += 1;
      if (arr[i][j] !== OFFSET_W) CNT_W += 1;

      if (j !== y + 7) {
        const temp = OFFSET_B;
        OFFSET_B = OFFSET_W;
        OFFSET_W = temp;
      }
    }
  }

  return Math.min(CNT_B, CNT_W);
}
