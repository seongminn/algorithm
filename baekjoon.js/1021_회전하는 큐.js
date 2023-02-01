/**
 * 1021. 회전하는 큐
 *
 * 작성자: seongminn
 * 난이도: Silver 3
 * 언어: node.js
 * 사용 메모리: 9,348 KB
 * 소요 시간: 128 ms
 * 해결 날짜: 2022년 2월 1일
 */

const [[n, m], goal] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .split('\n')
  .map((arr) => arr.split(' ').map(Number));

let queue = Array.from({ length: n }, (_, idx) => idx + 1);
let cnt = 0;

goal.forEach((item) => {
  if (queue.at(0) === item) {
    return queue.shift();
  }

  let idx = queue.indexOf(item);

  if (idx <= queue.length / 2) {
    for (let i = 0; i < idx; i++) {
      queue.push(queue.shift());
      cnt++;
    }
  } else {
    for (let i = 0; i < queue.length - idx; i++) {
      queue.unshift(queue.pop());
      cnt++;
    }
  }

  queue.shift();
});

console.log(cnt);
