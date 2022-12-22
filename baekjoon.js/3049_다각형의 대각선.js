/**
 * 3049. 다각형의 대각선
 *
 * 작성자: seongminn
 * 난이도: Silver 5
 * 언어: node.js
 * 사용 메모리: 9,328 KB
 * 소요 시간: 148 ms
 * 해결 날짜: 2022년 12월 22일
 */

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString();

const angle = Number(input);
const arr = Array.from({ length: 4 }, (_, idx) => angle - idx);

console.log(arr.reduce((a, c) => a * c, 1) / 24);
