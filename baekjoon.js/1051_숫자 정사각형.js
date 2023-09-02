/**
 * 1051. 숫자 정사각형
 *
 * 작성자: seongminn
 * 난이도: Silver 3
 * 언어: node.js
 * 사용 메모리: 9,592 KB
 * 소요 시간: 128 ms
 * 해결 날짜: 2023년 9월 2일
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const [N, M] = input.shift().split(' ').map(Number);

let max = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    for (let k = max + 1; i + k < N && j + k < M; k++) {
      if (
        input[i][j] === input[i + k][j] &&
        input[i][j] === input[i][j + k] &&
        input[i][j] === input[i + k][j + k]
      ) {
        max = k;
      }
    }
  }
}

console.log((max + 1) ** 2);

// *---------------------------------------------------------------------------------------------------
/**
 * 1051. 숫자 정사각형
 *
 * 작성자: seongminn
 * 난이도: Silver 3
 * 언어: node.js
 * 사용 메모리: 9,584 KB
 * 소요 시간: 128 ms
 * 해결 날짜: 2023년 9월 2일
 */

for (let k = Math.min(N, M); k > 0; k--) {
  for (let i = 0; i + k < N; i++) {
    for (let j = 0; j + k < M; j++) {
      if (
        input[i][j] === input[i + k][j] &&
        input[i][j] === input[i][j + k] &&
        input[i][j] === input[i + k][j + k]
      ) {
        return console.log((k + 1) ** 2);
      }
    }
  }
}

console.log(1);

// *---------------------------------------------------------------------------------------------------
/**
 * 1051. 숫자 정사각형
 *
 * 작성자: seongminn
 * 난이도: Silver 3
 * 언어: node.js
 * 사용 메모리: 10,792 KB
 * 소요 시간: 188 ms
 * 해결 날짜: 2023년 9월 2일
 */

let answer = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    let cnt = 1;

    while (i + cnt < N && j + cnt < M) {
      if (
        input[i][j] === input[i + cnt][j] &&
        input[i][j] === input[i][j + cnt] &&
        input[i][j] === input[i + cnt][j + cnt]
      ) {
        answer = Math.max(answer, (cnt + 1) ** 2);
      }
      cnt++;
    }
  }
}

console.log(answer);
