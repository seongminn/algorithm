/**
 * 1244. 스위치 켜고 끄기
 *
 * 작성자: seongminn
 * 난이도: Silver 4
 * 언어: node.js
 * 사용 메모리: 9,356 KB
 * 소요 시간: 116 ms
 * 해결 날짜: 2023년 9월 14일
 */

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const N = +input.shift();
const switches = input.shift().split(' ').map(Number);
const [_, ...students] = input;

students.forEach((input) => {
  const [gender, switchNumber] = input.split(' ').map(Number);

  if (gender === 1) maleHandler(switches, switchNumber);
  else femaleHandler(switches, switchNumber);
});

printAnswer(switches);

function maleHandler(switches, number) {
  for (let i = 1; i <= Math.floor(N / number); i++) {
    switches[i * number - 1] = +!switches[i * number - 1];
  }
}

function femaleHandler(switches, number) {
  switches[number - 1] = +!switches[number - 1];

  let prev = number - 2;
  let next = number;

  while (switches[prev] === switches[next]) {
    switches[prev] = +!switches[prev];
    switches[next] = +!switches[next];

    prev--;
    next++;

    if (prev < 0 || next >= N) break;
  }
}

function printAnswer(answer) {
  const res = [];

  while (answer.length) {
    res.push(answer.splice(0, 20));
  }

  console.log(res.map((arr) => arr.join(' ')).join('\n'));
}
