/**
 * 1. 명령어 문자열을 명령어와 데이터로 분할한다.
 * 2. 명령어가 "I"라면 data를 queue에 넣고 오름차순으로 정렬한다.
 * 3. 명령어가 "D"일 때는 다음과 같은 작업을 수행한다.
 *    - 데이터가 1이면 queue에서 가장 큰 값을 제거한다.
 *    - 데이터가 -1이면 queue에서 가장 작은 값을 제거한다.
 * 4. queue에 남은 값이 있다면 [최댓값, 최솟값]을 반환하고, 없다면 [0, 0]을 반환한다.
 *
 * --
 *
 * 데이터를 삽입할 때마다 정렬을 하는 것과 데이터를 제거할 때마다 최소/최대값을 탐색하는 것
 * 둘 중 어떤 작업이 빠를지 생각해볼 필요가 있다.
 *
 * @param {string[]} operations
 * @returns {number[]}
 */
function double_priority(operations) {
  const queue = [];

  operations.forEach((opcode) => {
    const [inst, data] = opcode.split(' ');

    if (inst === 'I') insertor(data);
    else if (queue.length >= 1) deletor(data);
  });

  function insertor(data) {
    queue.push(Number(data));
    queue.sort((a, b) => a - b);
  }

  function deletor(data) {
    if (data === '1') queue.pop();
    else queue.shift();
  }

  return queue.length ? [queue.at(-1), queue[0]] : [0, 0];
}
