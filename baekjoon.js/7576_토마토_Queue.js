/**
 * 7576. 토마토
 *
 * 작성자: seongminn
 * 난이도: Gold 5
 * 언어: node.js
 * 사용 메모리: 12,400 KB
 * 소요 시간: 192 ms
 * 해결 날짜: 2022년 1월 5일
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(data) {
    const node = new Node(data);

    if (!this.head) this.head = node;
    else this.tail.next = node;

    this.tail = node;
    this.length++;
  }

  dequeue() {
    if (!this.head) return false;

    const data = this.head.data;
    this.head = this.head.next;
    this.length--;

    return data;
  }

  front() {
    return this.head && this.head.data;
  }

  end() {
    return this.tail && this.tail.data;
  }

  getQueue() {
    if (!this.head) return false;

    const arr = [];
    let node = this.head;

    while (node) {
      arr.push(node.data);
      node = node.next;
    }

    return arr;
  }
}

const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [m, n] = input.shift().split(' ').map(Number);
let tomato = [];
let ripe = new Queue();
let day = 0;

for (let i = 0; i < n; i++) {
  const t = input.shift().split(' ').map(Number);
  tomato.push(t);

  t.forEach((num, idx) => num === 1 && ripe.enqueue([idx, i]));
}

const dxs = [0, 0, 1, -1];
const dys = [1, -1, 0, 0];
let last = ripe.end();

bfs();

tomato.forEach((arr) => {
  if (arr.includes(0)) day = 0;
});

console.log(day - 1);

function bfs() {
  while (ripe.length > 0) {
    const [x, y] = ripe.dequeue();

    for (let d = 0; d < 4; d++) {
      const nx = x + dxs[d];
      const ny = y + dys[d];

      if (in_range(nx, ny) && !tomato[ny][nx]) {
        tomato[ny][nx] = tomato[y][x];
        ripe.enqueue([nx, ny]);
      }
    }

    if ([x, y].toString() === last.toString()) {
      day += 1;
      last = ripe.end();
    }
  }
}

function in_range(x, y) {
  return 0 <= x && x < m && 0 <= y && y < n;
}
