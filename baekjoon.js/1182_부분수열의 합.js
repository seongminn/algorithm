/**
 * 1182. 부분수열의 합
 *
 * 작성자: seongminn
 * 난이도: __
 * 언어: node.js
 * 사용 메모리: __ KB
 * 소요 시간: __ ms
 * 해결 날짜: 2023년 9월 13일
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const [N, S] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

let cnt = 0;

search(0, 0);

console.log(cnt);

function search(idx, sum) {
  sum += arr[idx];

  if (sum === S) cnt += 1;
  if (idx === N) return;

  search(idx + 1, sum);
  search(idx + 1, sum - arr[idx]);
}
