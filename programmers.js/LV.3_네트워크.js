/**
 * BFS로 접근한 방법
 *
 * 1. 각 컴퓨터 별 연결되어 있는 컴퓨터 번호를 초기화 한다. → network
 * 2. 첫번째 컴퓨터부터 연결되어 있는 모든 컴퓨터 번호를 queue에 넣는다.
 * 3. queue에 들어 있는 컴퓨터를 하나씩 뽑아서 해당 컴퓨터와 연결되어 있는 컴퓨터를 차례로 queue에 넣는다.
 * 4. 만약 queue에서 꺼낸 컴퓨터를 이미 처리한 적 있다면 넘어간다.
 * 5. queue에 들어 있는 컴퓨터가 없어질 때까지 위 작업을 반복한다.
 *
 * @param {number} n
 * @param {number[][]} computers
 * @returns
 */
function solution(n, computers) {
  const network = createNetwork(computers);
  const visited = new Set();
  const queue = [];
  let answer = 0;

  network.forEach((el) => {
    el.forEach((item) => {
      if (!visited.has(item)) {
        search(item);
        answer++;
      }
    });
  });

  function search(item) {
    queue.push(item);

    while (queue.length > 0) {
      const desti = queue.pop();

      visited.add(desti);

      network[desti - 1].forEach((el) => {
        if (!visited.has(el)) queue.push(el);
      });
    }
  }

  return answer;
}

function createNetwork(computers) {
  const arr = [];

  computers.forEach((list, idx) => {
    const temp = list
      .map((el, listIdx) => el === 1 && listIdx + 1)
      .filter((el) => el);

    network[idx] = temp;
  });

  return arr;
}
