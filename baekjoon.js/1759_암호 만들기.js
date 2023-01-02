/**
 * 1759. 암호 만들기
 *
 * 작성자: seongminn
 * 난이도: Gold 5
 * 언어: node.js
 * 사용 메모리: 10,852 KB
 * 소요 시간: 184 ms
 * 해결 날짜: 2022년 1월 2일
 */

const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [l, c] = input.shift().split(' ').map(Number);
const string = input.shift().split(' ').sort();
const regex =
  /[aeiou]{1,}[^aeiou]{2,}|[^aeiou]{1,}[aeiou]{1,}[^aeiou]{1,}|[^aeiou]{2,}[aeiou]{1,}/;

function search(pw, idx) {
  if (pw.length === l && regex.test(pw)) return console.log(pw);
  if (idx >= c) return;

  search(pw + string[idx], idx + 1);
  search(pw, idx + 1);
}

for (let i = 0; i <= c - l; i++) {
  search(string[i], i + 1);
}
