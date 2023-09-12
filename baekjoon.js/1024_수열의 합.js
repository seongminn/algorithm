/**
 * 1024. 수열의 합
 *
 * 작성자: seongminn
 * 난이도: Silver 2
 * 언어: node.js
 * 사용 메모리: 9,592 KB
 * 소요 시간: 152 ms
 * 해결 날짜: 2023년 9월 12일
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, L] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

for (let i = L; i < 101; i++) {
  const target = N - (i * (i + 1)) / 2;

  if (target % i === 0) {
    const probable = Math.floor(target / i);

    if (probable >= -1) {
      return console.log(
        Array.from({ length: i }, (_, idx) => probable + idx + 1).join(' ')
      );
    }
  }
}

console.log(-1);
