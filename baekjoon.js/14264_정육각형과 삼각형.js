/**
 * 14264. 정육각형과 삼각형
 *
 * 작성자: seongminn
 * 언어: node.js
 * 사용 메모리: 9,588 KB
 * 소요 시간: 124 ms
 * 해결 날짜: 2022년 12월 19일
 */

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim();

const answer = (Math.sqrt(3) * input ** 2) / 4;

console.log(answer);
