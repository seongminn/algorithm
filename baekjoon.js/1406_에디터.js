/**
 * 1406. 에디터
 *
 * 작성자: seongminn
 * 난이도: Silver 2
 * 언어: node.js
 * 사용 메모리: 104,672 KB
 * 소요 시간: 584 ms
 * 해결 날짜: 2022년 1월 9일
 */

const input = require('fs').readFileSync('input.txt').toString().split('\n');
const left = input.shift().trim().split('');
const right = [];
const m = input.shift();

for (let i = 0; i < m; i++) {
  const next = input[i].split(' ').map((letter) => letter.trim());
  let [cmd, item] = next.length === 2 ? next : [next.shift(), ''];

  if (cmd === 'L' && left.length > 0) right.push(left.pop());
  if (cmd === 'D' && right.length > 0) left.push(right.pop());
  if (cmd === 'B') left.pop();
  if (cmd === 'P') left.push(item);
}

console.log(left.join('') + right.reverse().join(''));
